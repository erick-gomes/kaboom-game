import kaboom from 'kaboom'
import { useEffect } from 'react'
import { GetStaticProps } from 'next'

export default function Home() {
    useEffect(() => {
        const {
            scene, loadRoot, loadSprite, add,
            action, sprite, width, height,
            scale, origin, pos, body,
            keyPress, go, loop, rand,
            start, text, color, rect,
            mouseClick
        } = kaboom({
            fullscreen: true,
            scale: 2
        })

        const folder = 'assets'
        loadRoot(folder)
        loadSprite('birdy', '/images/kilcyane.png')
        loadSprite('bg', '/images/bg.jpg')
        loadSprite('pipe', '/images/pipe.png')
        loadSprite('pipe-reverse', '/images/pipe-reverse.png')

        scene('main', () => {
            add([
                sprite('bg'),
                scale(width() / 240, height() / 240),
                origin('topleft')
            ])

            const birdy = add([
                sprite('birdy'),
                pos(80, 80),
                body()
            ])

            const JUMP_FORCE = 320

            keyPress('space', () => {
                birdy.jump(JUMP_FORCE)
            })

            mouseClick(() => {
                birdy.jump(JUMP_FORCE)
            })

            birdy.action(() => {
                if (birdy.pos.y >= height()) {
                    go('gameover')
                }
            })

            birdy.collides('pipe', () => {
                go('gameover')
            })

            const SPEED = 120
            const PIPE_OPEN = 120
            const PIPE_MIN_HEIGHT = 16

            loop(1.5, () => {

                const h1 = rand(PIPE_MIN_HEIGHT, height() - PIPE_MIN_HEIGHT - PIPE_OPEN)
                const h2 = h1 + PIPE_OPEN

                add([
                    sprite('pipe-reverse'),
                    origin('bot'),
                    pos(width(), h1),
                    'pipe'
                ])

                add([
                    sprite('pipe'),
                    origin('top'),
                    pos(width(), h2),
                    'pipe'
                ])
            })

            action('pipe', (pipe) => {
                pipe.move(-SPEED, 0)
            })
        })

        scene('gameover', () => {

            add([
                rect(width(), height()),
                color(0, 0, 0),
                pos(0, 0)
            ])

            const loserColor = color(255, 0, 0)
            const loserCenter = origin('center')

            add([
                text('You lose!', 14),
                loserColor,
                loserCenter,
                pos(width() / 2, height() / 2)
            ])

            add([
                text('Press space to play again', 6),
                loserColor,
                loserCenter,
                pos(width() / 2, (height() / 2) + 50)
            ])

            keyPress("space", () => {
                go("main")
            })
        })

        start('main')
    }, [])

    return (
        <></>
    )
}

export const getStaticProps: GetStaticProps = async (_context) => {

    return {
        props: {}
    }
}

