import SkillSection from "./SkillSection";
import ProjectSection from "./ProjectSection";
import BottomSection from "./BottomSection";

export default function MainBody() {
  return (
    <div className="w-9/12 mx-auto">
      <SkillSection />
      <ProjectSection />
      <BottomSection />
    </div>
  );
}
