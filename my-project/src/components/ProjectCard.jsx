export default function Card(props) {
  return (
    <div
      className=" border border-gray-300 rounded p-4 m-4 w-80 flex flex-col
        hover:bg-gray-800 hover:text-gray-100 duration-200"
    >
      <p className="py-4 font-semibold">{props.title}</p>
      <hr />
      <p className="py-4">{props.details}</p>
      <p className="italic font-light text-sm">Click for the Github Link</p>
    </div>
  );
}
