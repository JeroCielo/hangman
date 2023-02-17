import "./HangmanDrawing.css"

const HEAD = <div className="person-head"></div>
const BODY = <div className="person-body"></div>
const RIGHT_ARM = <div className="person-right-arm"></div>
const LEFT_ARM = <div className="person-left-arm"></div>
const RIGHT_LEG = <div className="person-right-leg"></div>
const LEFT_LEG = <div className="person-left-leg"></div>

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
  numberOfGuesses: number
}

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
    return (
        <div className="drawing-main">
            {BODY_PARTS.slice(0, numberOfGuesses)}
            <div className="neck-bar"></div>
            <div className="top-bar"></div>
            <div className="vertical-bar"></div>
            <div className="bottom-bar"></div>
        </div>
    )
}