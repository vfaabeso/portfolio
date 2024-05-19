export default function NavbarButton(props) {
  return (
    <li className="inline mx-4 hover:font-bold duration-200">
      <a href={`#${props.link}`}>{props.linkName}</a>
    </li>
  );
}
