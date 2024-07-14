import './Document.css'

function Document(props) {

  const {data} = props;

  return (
    <div className="sheet-outer A4">
    <section className="sheet padding-5mm">
      <article>
        <h1>{data.heading}</h1>
        <p>{data.paragraph}</p>
      </article>
    </section>
    <section className="sheet padding-5mm">
        <article>This is an A4 document.</article> 
    </section>
    </div>
  )
}

export default Document
