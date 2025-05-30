import {
  ActionIcon,
  Button,
  Divider,
  TagsInput,
  Textarea,
} from "@mantine/core";
import {
  IconBriefcase,
  IconDeviceFloppy,
  IconMapPin,
  IconPencil,
  IconPlus,
} from "@tabler/icons-react";
import React, { useState } from "react";
import ExpCard from "./ExpCard";
import CertiCard from "./CertiCard";
import { profile } from "../Data/TalentData";
import SelectInput from "./SelectInput";
import fields from "../Data/Profile";
import ExpInput from "./ExpInput";
import CertiInput from "./CertiInput";

const Profile = (props: any) => {
  const select = fields;
  const [about, setAbout] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi pariatur autem sequi sit aut? Facere vitae explicabo perferendis cum commodi laboriosam aliquam obcaecati dolores, nobis deserunt nesciunt repellendus! Ratione, alias!"
  );

  const [skills, setSkills] = useState([
    "JavaScript",
    "TypeScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Redux",
    "Next.js",
    "GraphQL",
    "REST API",
    "Git",
    "Docker",
    "Jest",
    "Cypress",
    "AWS",
    "Firebase",
  ]);
  const [addExp, setAddExp] = useState(false);
  const [addCerti, setAddCerti] = useState(false);
  const [edit, setEdit] = useState([false, false, false, false, false]);
  const handleEdit = (index: any) => {
    const newEdit = [...edit];
    newEdit[index] = !newEdit[index];
    setEdit(newEdit);
  };
  return (
    <div className="w-4/5 mx-auto">
      <div className="relative">
        <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
        <img
          className="rounded-full w-48 h-48 -bottom-1/3
         absolute left-3 border-mine-shaft-950 border-8"
          src="/avatar.png"
          alt=""
        />
      </div>
      <div className="px-3 mt-16">
        <div className="text-3xl font-semibold flex justify-between">
          Jarrod Wood
          <ActionIcon
            onClick={() => handleEdit(0)}
            size="lg"
            variant="subtle"
            color="brightSun.4">
            {edit[0] ? (
              <IconDeviceFloppy className="h-4/5 w-4/5" />
            ) : (
              <IconPencil className="h-4/5 w-4/5" />
            )}
          </ActionIcon>
        </div>
        {edit[0] ? (
          <>
            <div className="flex gap-10 [&>*]:w-1/2">
              <SelectInput {...select[0]} />
              <SelectInput {...select[1]} />
            </div>
            <SelectInput {...select[2]} />
          </>
        ) : (
          <>
            {" "}
            <div className="text-xl flex gap-1 items-center">
              <IconBriefcase className="h-5 w-5" stroke={1.5} /> {props.role}{" "}
              &bull; {props.company}
            </div>
            <div
              className="flex gap-1 text-lg
        text-mine-shaft-300 items-center">
              <IconMapPin className="h-5 w-5" stroke={1.5} />
              {props.location}
            </div>
          </>
        )}
      </div>
      <Divider mx="xs" my="xl" />

      <div className="px-3">
        <div className="text-2xl font-semibold mb-3 flex justify-between">
          About
          <ActionIcon
            onClick={() => handleEdit(1)}
            size="lg"
            variant="subtle"
            color="brightSun.4">
            {edit[1] ? (
              <IconDeviceFloppy className="h-4/5 w-4/5" />
            ) : (
              <IconPencil className="h-4/5 w-4/5" />
            )}
          </ActionIcon>
        </div>
        {edit[1] ? (
          <Textarea
            autosize
            minRows={3}
            placeholder="Enter About Your-Self"
            value={about}
            onChange={(event) => setAbout(event.currentTarget.value)}
          />
        ) : (
          <div className="text-sm text-mine-shaft-400 text-justify">
            {about}{" "}
          </div>
        )}
      </div>
      <Divider mx="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-3 flex justify-between">
          Skills{" "}
          <ActionIcon
            onClick={() => handleEdit(2)}
            size="lg"
            variant="subtle"
            color="brightSun.4">
            {edit[2] ? (
              <IconDeviceFloppy className="h-4/5 w-4/5" />
            ) : (
              <IconPencil className="h-4/5 w-4/5" />
            )}
          </ActionIcon>
        </div>
        {edit[2] ? (
          <TagsInput
            value={skills}
            onChange={setSkills}
            placeholder="Add Skills"
            splitChars={[",", " ", "|"]}
          />
        ) : (
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-bright-sun-400 text-sm font-medium bg-opacity-15 rounded-3xl text-bright-sun-400
             px-3 py-1">
                {skill}
              </div>
            ))}
          </div>
        )}
        <Divider mx="xs" my="xl" />
        <div className="px-3">
          <div className="text-2xl font-semibold mb-5 flex justify-between">
            Experience
            <div className="flex gap-2">
              <ActionIcon
                onClick={() => setAddExp(true)}
                size="lg"
                variant="subtle"
                color="brightSun.4">
                {edit[3] ? (
                  <IconDeviceFloppy className="h-4/5 w-4/5" />
                ) : (
                  <IconPlus className="h-4/5 w-4/5" />
                )}
              </ActionIcon>
              <ActionIcon
                onClick={() => handleEdit(3)}
                size="lg"
                variant="subtle"
                color="brightSun.4">
                {edit[3] ? (
                  <IconDeviceFloppy className="h-4/5 w-4/5" />
                ) : (
                  <IconPencil className="h-4/5 w-4/5" />
                )}
               
              </ActionIcon>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            {profile.experience.map((exp: any, index: any) => <ExpCard key={index} {...exp} edit={edit[3]} />
            )}
             {addExp && <ExpInput add setEdit={setAddExp} />}
          </div>
        </div>
        <Divider mx="xs" my="xl" />
        <div className="px-3">
          <div className="text-2xl font-semibold mb-5 flex justify-between">
            Certifications
            <div className="flex gap-2">
              <ActionIcon
                onClick={() => setAddCerti(true)}
                size="lg"
                variant="subtle"
                color="brightSun.4">
                {edit[4] ? (
                  <IconDeviceFloppy className="h-4/5 w-4/5" />
                ) : (
                  <IconPlus className="h-4/5 w-4/5" />
                )}
              </ActionIcon>
              <ActionIcon
                onClick={() => handleEdit(3)}
                size="lg"
                variant="subtle"
                color="brightSun.4">
                {edit[4] ? (
                  <IconDeviceFloppy className="h-4/5 w-4/5" />
                ) : (
                  <IconPencil className="h-4/5 w-4/5" />
                )}
               
              </ActionIcon>
            </div> </div>
          <div className="flex flex-col gap-8">
            {
            profile.certifications.map((certi: any, index: any) =><CertiCard key={index} edit={edit[4]} {...certi} />)}
          {
           addCerti && <CertiInput setEdit={setAddCerti} />
          }
          </div>
        </div>
      </div>
    </div>
 
  );
};

export default Profile;
