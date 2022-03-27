

const Quote = ({ author, quote }) => {
    return (
        <blockquote className="blockquote">
            <p className="mt-5 mb-4 text-center">{quote}</p>
            <figcaption className="blockquote-footer text-center">
                <cite title="Source Title">{author}</cite>
            </figcaption>
        </blockquote>
    )
}

export default Quote