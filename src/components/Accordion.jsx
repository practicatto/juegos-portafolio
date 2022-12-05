export function Accordion({ title, paragraph }) {
  return (
    <div>
      <div className=" w-full shadow lg:max-w-md">
        <details className="rounded-lg">
          <summary className="font-semibold">{title}</summary>
          <div className="mt-3">
            <p className="text-sm leading-6 text-gray-600">{paragraph}</p>
          </div>
        </details>
      </div>
    </div>
  )
}
