/* eslint-disable @next/next/no-img-element */
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import { TSkill } from "@/types";
import { Delete, Edit } from "lucide-react";
import React, { useState } from "react";

const SkillCard = ({ skill }: { skill: TSkill }) => {
  const [open, setIsOpen] = useState(false);
  return (
    <div key={skill.icon}>
      <Modal open={open} setIsOpen={setIsOpen}>
        <ModalTrigger>
          <img
            alt={skill.icon}
            src={`https://skillicons.dev/icons?i=${skill.icon}`}
          />
        </ModalTrigger>
        <ModalBody modalTitle="Edit Skill">
          <ModalContent>
            <div className="flex items-center flex-col gap-2">
              <img
                className="w-24 h-24"
                alt={skill.icon}
                src={`https://skillicons.dev/icons?i=${skill.icon}`}
              />
              <h3 className="text-xl text-white">{skill.skillName}</h3>
              <p className="text-white">{skill.description}</p>
            </div>
            <div className="divider"></div>
            <div className="flex justify-between">
                <button className="btn bg-green-500 text-black"><Edit /> Edit</button>
                <button className="btn bg-red-500 text-black"><Delete /> Delete</button>
            </div>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default SkillCard;
