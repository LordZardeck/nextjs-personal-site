import SbEditable from "storyblok-react";
import GridModule from "../modules/grid-module";
import TeaserModule from "../modules/teaser-module";
import CenteredSectionContentModule from "../modules/centered-section-content-module";
import TextModule from "../modules/text-module";
import SkillsChartModule from "../modules/skills-chart-module";
import PostListModule from "../modules/post-list-module";
import PageModule from "../modules/page-module";
import BlogPostModule from "../modules/blogpost-module";

let library = {
  teaser: TeaserModule,
  grid: GridModule,
  centeredSectionContent: CenteredSectionContentModule,
  text: TextModule,
  skillsChart: SkillsChartModule,
  postList: PostListModule,
  page: PageModule,
  blogpost: BlogPostModule,
};

export default function ModuleDelegator({ modules }) {
  return (
    <>
      {modules?.map((module) => {
        let Module = library[module.component];
        if (Module)
          return (
            <SbEditable content={module} key={module._uid}>
              <Module {...module} />
            </SbEditable>
          );

        return null;
      })}
    </>
  );
}
