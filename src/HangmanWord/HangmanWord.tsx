import "./HangmanWord.css"

type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
    reveal?: boolean
}

export function HangmanWord({
        guessedLetters,
        wordToGuess,
        reveal = false,
    }: HangmanWordProps) {
    return (
        <div className="word-main">
            {wordToGuess.split("").map((letter, index) => (
                <span style={{ borderBottom: ".1em solid rgb(23, 2, 70)", color:"white"}} key={index}>
                <span
                    style={{
                    visibility:
                        guessedLetters.includes(letter) || reveal
                        ? "visible"
                        : "hidden",
                    color:
                        !guessedLetters.includes(letter) && reveal ? "red" : "black",
                    }}
                >
                    {letter}
                </span>
                </span>
            ))}
        </div>
    )
}