export interface Vector2 {
    x: number;
    y: number;
}

export interface HexlixPath {
    size: Vector2;
    start: Vector2;
    path: {
        point: Vector2,
        curve: Vector2
    }[];
    midpoint: number;
}

export class HelixArt {

    public static Generate(size: Vector2, turns: number): Promise<string> {
        return new Promise((res) => {
            const randomness = 50;

            const { canvas, ctx } = this.makeCanvas(size);
            let helixPoints = this.getHelix(size, turns, randomness);
            helixPoints = this.randomiseHelix(helixPoints, randomness);

            const rotation = this.randomOffset(0, 20, 10) * (Math.floor(Math.random() * 2) % 2 ? -1 : 1);

            ctx.rotate(-this.randomOffset(0, 25, 15) * Math.PI / 180);

            ctx.beginPath();
            ctx.moveTo(helixPoints.start.x, helixPoints.start.y);
            helixPoints.path.forEach(point => {
                ctx.quadraticCurveTo(point.curve.x, point.curve.y, point.point.x, point.point.y);
            });

            const grd = ctx.createLinearGradient(0, helixPoints.midpoint, size.x, helixPoints.midpoint);
            grd.addColorStop(0, 'rgba(0,0,0,0.5)');
            grd.addColorStop(1, 'rgba(0,0,0,1)');
            ctx.fillStyle = grd;


            ctx.fill();



            res(canvas.toDataURL());
        })
    }

    private static makeCanvas(size: Vector2) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        ctx.canvas.width = size.x * 1.5;
        ctx.canvas.height = size.y;
        return { canvas, ctx }
    }

    private static randomOffset(val: number, max: number, min: number) {
        return val + ((Math.random() * max) + min);
    }

    private static clamp(val, min, max) {
        return Math.max(Math.min(val, max), min);
    }

    private static randomiseHelix(helix: HexlixPath, randomness: number): HexlixPath {
        helix.path.forEach(e => {
            e.point.x = this.clamp(this.randomOffset(e.point.x, randomness, -randomness), 0, helix.size.x);
            e.curve.x = this.clamp(this.randomOffset(e.curve.x, randomness, -randomness), -(helix.size.x * .25), helix.size.x * 1.25);
            e.curve.y = this.randomOffset(e.curve.y, randomness, -randomness);
            e.point.y = this.randomOffset(e.point.y, randomness, -randomness);
        });

        return helix;
    }

    private static getHelix(size: Vector2, turnsWanted: number, randomness: number): HexlixPath {
        const helix: HexlixPath = {
            size,
            start: { x: size.x / 2, y: size.y * 1.5 },
            path: [],
            midpoint: this.randomOffset(size.x / 2, randomness, randomness)
        }

        for (let i = 0; i < turnsWanted + 1; i++) {
            helix.path.push({
                point: {
                    x: helix.midpoint,
                    y: size.y - (i * (size.y / turnsWanted))
                },
                curve: {
                    x: i % 2 === 0 ? -(size.x * .25) : size.x * 1.25,
                    y: size.y - (i * (size.y / turnsWanted)) + ((size.y / turnsWanted) / 2)
                }
            })
        }

        return helix;
    }

}