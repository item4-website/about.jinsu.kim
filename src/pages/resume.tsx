import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import clearFix from 'polished/lib/mixins/clearFix';
import React from 'react';

import Layout from '../components/Layout';
import {
  PageBreak,
  Section,
  SectionTitle,
  SubSection,
  SubSectionTitle,
} from '../components/Section';
import SEO from '../components/SEO';
import styles from '../utils/styles';

const InlineList = styled.ul`
  display: inline-block;
  margin: 0;
  padding: 0;

  li {
    display: inline-block;
    margin-right: 3px;

    &::after {
      content: ',';
    }

    &:last-child::after {
      content: '';
    }
  }
`;
const SkillList = styled(InlineList)`
  margin-left: 2.5rem;
  margin-right: 2.5rem;
`;
const ContributionList = styled(InlineList)`
  li {
    margin-right: 0.25rem;
  }
  li::after {
    content: none;
  }

  ${styles.mediaPrint} {
    li::after {
      content: ',';
    }
    li:last-child::after {
      content: none;
    }
  }
`;
const DefineList = styled.dl`
  ${clearFix()}

  > dt {
    float: left;
    font-weight: bold;
    margin-right: 5px;
    text-align: right;
    width: 120px;

    &::after {
      content: ':';
    }
  }

  > dd {
    float: left;
    width: calc(100% - 120px - 5px);
  }
`;
const UnorderedList = styled.ul`
  margin-left: 2.5rem;
  margin-right: 2.5rem;
`;
const WorkList = styled.ul`
  margin-top: 1.5rem;
`;
const OpenSourceContributionList = styled.ul`
  margin-left: 2.5rem;
  margin-right: 2.5rem;
`;
const OpenSourceNameLink = styled.a`
  margin-right: 1rem;
  margin-right: 1rem;
`;
const ContributionLink = styled.a`
  color: white;
  border-radius: 0.2rem;
  font-size: 0.75rem;
  font-weight: bold;
  padding: 0.15rem 0.25rem;
  text-decoration: none;

  &:hover {
    color: white;
  }

  ${styles.mediaPrint} {
    padding: 0;
  }
`;
const IssueLink = styled(ContributionLink)`
  background: #5bc0de;

  ${styles.mediaPrint} {
    background: none;
    color: #5bc0de;
  }

  &::before {
    content: 'ISSUE ';
  }
`;
const PullRequestLink = styled(ContributionLink)`
  background: #5cb85c;

  ${styles.mediaPrint} {
    background: none;
    color: #5cb85c;
  }

  &::before {
    content: 'PR ';
  }
`;
const SectionParagraph = styled.p`
  margin-left: 1.5rem;
`;

interface ResumePageProps extends PageProps {
  data: {
    site: SiteMetadataWrapper;
  };
}
interface RelatedLink {
  name: string;
  url: string;
}
interface SkillItem {
  name: string;
  url: string;
}
interface Skill {
  name: string;
  items: SkillItem[];
}
interface WorkExperience {
  name: string;
  url?: string;
  position: string;
  started_at: string;
  ended_at: string;
  descriptions: string[];
  skills: string[];
}
interface Organization {
  name: string;
  url: string;
  started_at: string;
  ended_at: string;
  descriptions: string[];
  skills: string[];
}
interface Project {
  name: string;
  url?: string;
  repo_url?: string;
  started_at: string;
  ended_at: string;
  descriptions: string[];
  skills: string[];
}
interface Contribution {
  type: 'issue' | 'pr';
  url: string;
  number: string;
}
interface OpenSource {
  name: string;
  url: string;
  items: Contribution[];
}
interface Activity {
  name: string;
  url?: string;
  date: string;
  description: string;
}
interface Disability {
  name: string;
  name_en: string;
  url: string;
  descriptions: string[];
}

const related_links: RelatedLink[] = require('../data/related_links.json');
const skills: Skill[] = require('../data/skills.json');
const work_experiences: WorkExperience[] = require('../data/work_experiences.json');
const organizations: Organization[] = require('../data/organizations.json');
const projects: Project[] = require('../data/projects.json');
const opensource_contributions: OpenSource[] = require('../data/contributions.json');
const activities: Activity[] = require('../data/activities.json');
const disabilities: Disability[] = require('../data/disabilities.json');

const ResumePage: React.FC<ResumePageProps> = ({
  location,
  data: {
    site: { siteMetadata: metadata },
  },
}) => {
  let lineCount = 0;
  return (
    <Layout location={location} metadata={metadata}>
      <SEO page_name='Résumé' location={location} />
      <section property='mainEntity' typeof='ProfilePage'>
        <h1 property='mainContentOfPage'>Résumé</h1>
        <meta property='inLanguage' content='ko-KR' />
        <div property='about author mainEntity' typeof='Person'>
          <Section>
            <SectionTitle>Jinsu Kim</SectionTitle>
            <DefineList>
              <dt>Name</dt>
              <dd property='name'>김진수</dd>
              <dt>ID/Nickname</dt>
              <dd>item4</dd>
              <dt>Addr</dt>
              <dd property='address' typeof='PostalAddress'>
                <meta property='addressCountry' content='KR' />
                <span property='addressLocality'>경기도 부천시</span>
              </dd>
              <dt>Email</dt>
              <dd>
                <a href='mailto:resume@jinsu.kim' property='email'>
                  resume@jinsu.kim
                </a>
              </dd>
              <dt>Objective</dt>
              <dd property='jobTitle'>웹 개발자</dd>
              <dt>Links</dt>
              <dd>
                <InlineList>
                  {related_links.map(link => (
                    <li key={link.name}>
                      <a href={link.url} property='url'>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </InlineList>
              </dd>
            </DefineList>
          </Section>
          <Section>
            <SectionTitle>Summary</SectionTitle>
            <SectionParagraph>
              빠르게 성장하는 스타트업에서 백엔드 위주로 프론트까지 개발이
              가능한 풀스택 지향 개발자. 전통적인서버, 범용 클라우드, Docker를
              이용하여 테스트, CI, 배포, 모니터링등 전반적인 서비스 영역을
              경험하고 개선이 가능. 다만 음성언어로 의사소통이 곤란하고 심리적
              안정감이 낮은 환경에서의 근로에 어려움이 있음.
            </SectionParagraph>
          </Section>
          <Section typeof='ItemList'>
            <SectionTitle>Skills</SectionTitle>
            {skills.map(skill => {
              return (
                <SubSection key={skill.name}>
                  <SubSectionTitle property='name'>
                    {skill.name}
                  </SubSectionTitle>
                  <SkillList>
                    {skill.items.map((item, index) => {
                      return (
                        <li key={index}>
                          <meta property='position' content={`${index}`} />
                          <a href={item.url} property='item' typeof='Webpage'>
                            <meta property='url' content={item.url} />
                            <span property='name'>{item.name}</span>
                          </a>
                        </li>
                      );
                    })}
                  </SkillList>
                </SubSection>
              );
            })}
          </Section>
          <PageBreak />
          <Section>
            <SectionTitle>Work Experiences</SectionTitle>
            {work_experiences.map(work => {
              const name = work.url ? (
                <a property='url' href={work.url} target='_blank'>
                  <span property='name'>{work.name}</span>
                </a>
              ) : (
                <span property='name'>{work.name}</span>
              );
              lineCount +=
                4 +
                work.descriptions
                  .map(desc => (desc.length / 40) | 0)
                  .reduce((p, c) => p + c, 0);
              let breaking = false;
              if (lineCount >= 18) {
                breaking = true;
                lineCount = 0;
              }
              return (
                <>
                  <SubSection
                    property='worksFor'
                    typeof='Organization'
                    key={work.name}
                  >
                    <SubSectionTitle>{name}</SubSectionTitle>
                    <DefineList>
                      <dt>포지션</dt>
                      <dd>{work.position}</dd>
                      <dt>근무기간</dt>
                      <dd>
                        <time property='startDate'>{work.started_at}</time>부터{' '}
                        <time>{work.ended_at}</time>까지
                      </dd>
                      <dt>업무내용</dt>
                      <dd>
                        <WorkList>
                          {work.descriptions.map((desc, index) => (
                            <li key={index}>{desc}</li>
                          ))}
                        </WorkList>
                      </dd>
                      <dt>사용된 기술</dt>
                      <dd>
                        <InlineList>
                          {work.skills.map(skill => (
                            <li key={skill}>{skill}</li>
                          ))}
                        </InlineList>
                      </dd>
                    </DefineList>
                  </SubSection>
                  {breaking ? <PageBreak /> : null}
                </>
              );
            })}
          </Section>
          <Section>
            <SectionTitle>Organizations</SectionTitle>
            {organizations.map(org => {
              const name = org.url ? (
                <a property='url' href={org.url} target='_blank'>
                  <span property='name'>{org.name}</span>
                </a>
              ) : (
                <span property='name'>{org.name}</span>
              );
              lineCount +=
                4 +
                org.descriptions
                  .map(desc => (desc.length / 40) | 0)
                  .reduce((p, c) => p + c, 0);
              let breaking = false;
              if (lineCount >= 18) {
                breaking = true;
                lineCount = 0;
              }
              return (
                <>
                  <SubSection
                    key={org.name}
                    property='affiliation'
                    typeof='Organization'
                  >
                    <SubSectionTitle>{name}</SubSectionTitle>
                    <DefineList>
                      <dt>소속기간</dt>
                      <dd>
                        <time property='startDate'>{org.started_at}</time>부터{' '}
                        <time>{org.ended_at}</time>까지
                      </dd>
                      <dt>활동내용</dt>
                      <dd>
                        <WorkList>
                          {org.descriptions.map((desc, index) => (
                            <li key={index}>{desc}</li>
                          ))}
                        </WorkList>
                      </dd>
                      <dt>사용된 기술</dt>
                      <dd>
                        <InlineList>
                          {org.skills.map(skill => (
                            <li key={skill}>{skill}</li>
                          ))}
                        </InlineList>
                      </dd>
                    </DefineList>
                  </SubSection>
                  {breaking ? <PageBreak /> : null}
                </>
              );
            })}
          </Section>
          <Section>
            <SectionTitle>Participated Projects</SectionTitle>
            {projects.map((project, index) => {
              const name = project.url ? (
                <a property='url' href={project.url} target='_blank'>
                  <span property='name'>{project.name}</span>
                </a>
              ) : (
                <span property='name'>{project.name}</span>
              );
              lineCount +=
                4 +
                project.descriptions
                  .map(desc => (desc.length / 40) | 0)
                  .reduce((p, c) => p + c, 0);
              let breaking = false;
              if (
                (index === 0 && lineCount >= 18) ||
                (index > 0 && lineCount >= 20)
              ) {
                breaking = true;
                lineCount = 0;
              }
              return (
                <>
                  <SubSection key={project.name}>
                    <SubSectionTitle>{name}</SubSectionTitle>
                    <DefineList>
                      {project.repo_url ? (
                        <>
                          <dt>저장소</dt>
                          <dd>
                            <a href={project.repo_url} target='_blank'>
                              {project.repo_url}
                            </a>
                          </dd>
                        </>
                      ) : null}
                      <dt>참여기간</dt>
                      <dd>
                        <time property='startDate'>{project.started_at}</time>
                        부터 <time>{project.ended_at}</time>까지
                      </dd>
                      <dt>프로젝트 소개</dt>
                      <dd>
                        <WorkList>
                          {project.descriptions.map((desc, index) => (
                            <li key={index}>{desc}</li>
                          ))}
                        </WorkList>
                      </dd>
                      <dt>사용된 기술</dt>
                      <dd>
                        <InlineList>
                          {project.skills.map(skill => (
                            <li key={skill}>{skill}</li>
                          ))}
                        </InlineList>
                      </dd>
                    </DefineList>
                  </SubSection>
                  {breaking ? <PageBreak /> : null}
                </>
              );
            })}
          </Section>
          <Section>
            <SectionTitle>Open-Source Contributions</SectionTitle>
            <OpenSourceContributionList>
              {opensource_contributions.map((contrib, index) => {
                return (
                  <li key={index}>
                    <OpenSourceNameLink href={contrib.url} target='_blank'>
                      {contrib.name}
                    </OpenSourceNameLink>
                    <ContributionList>
                      {contrib.items.map(item => {
                        const Cls =
                          item.type === 'pr' ? PullRequestLink : IssueLink;
                        return (
                          <li key={item.number}>
                            <Cls href={item.url}>{item.number}</Cls>
                          </li>
                        );
                      })}
                    </ContributionList>
                  </li>
                );
              })}
            </OpenSourceContributionList>
          </Section>
          <PageBreak />
          <Section>
            <SectionTitle>Activities</SectionTitle>
            {activities.map((activity, index) => {
              const name = activity.url ? (
                <a href={activity.url} target='_blank'>
                  {activity.name}
                </a>
              ) : (
                activity.name
              );
              return (
                <SubSection key={index}>
                  <SubSectionTitle>{name}</SubSectionTitle>
                  <p>
                    <time>({activity.date}) </time>
                    {activity.description}
                  </p>
                </SubSection>
              );
            })}
          </Section>
          <Section>
            <SectionTitle>Disabilities</SectionTitle>
            <SectionParagraph>
              저는 다음과 같은 문제들로 정기적으로 병원 진료를 받고 있습니다.
            </SectionParagraph>
            {disabilities.map((disablity, index) => {
              const name = `${disablity.name} (${disablity.name_en})`;
              const title = disablity.url ? (
                <a href={disablity.url} target='_blank'>
                  {name}
                </a>
              ) : (
                name
              );
              return (
                <SubSection key={index}>
                  <SubSectionTitle>{title}</SubSectionTitle>
                  <UnorderedList>
                    {disablity.descriptions.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </UnorderedList>
                </SubSection>
              );
            })}
          </Section>
        </div>
      </section>
    </Layout>
  );
};
export default ResumePage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        title
        description
        tags
        socials {
          twitter
        }
      }
    }
  }
`;
