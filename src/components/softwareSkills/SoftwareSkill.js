// import React from "react";
// import "./SoftwareSkill.scss";
// import {skillsSection} from "../../portfolio";

// export default function SoftwareSkill() {
//   return (
//     <div>
//       <div className="software-skills-main-div">
//         <ul className="dev-icons">
//           {skillsSection.softwareSkills.map((skills, i) => {
//             return (
//               <li
//                 key={i}
//                 className="software-skill-inline"
//                 name={skills.skillName}
//               >
//                 <i className={skills.fontAwesomeClassname}></i>
//                 <p>{skills.skillName}</p>
//               </li>
//             );
//           })}

//         </ul>
//       </div>
//     </div>
//   );
// }

// SoftwareSkill.jsx
import React from "react";
import {Icon} from "@iconify/react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skill, i) => {
            const iconStyle = {
              fontSize: "2.5rem",
              ...skill.style // <-- merges your custom color
            };

            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skill.skillName}
              >
                {/* Font Awesome */}
                {skill.fontAwesomeClassname && (
                  <i className={skill.fontAwesomeClassname} style={iconStyle} />
                )}

                {/* Iconify */}
                {skill.iconifyClass && (
                  <Icon
                    icon={skill.iconifyClass}
                    style={{
                      ...iconStyle,
                      width: "2.5rem",
                      height: "2.5rem"
                    }}
                  />
                )}

                {/* Fallback */}
                {!skill.fontAwesomeClassname && !skill.iconifyClass && (
                  <i className="fas fa-cog" style={iconStyle} />
                )}

                <p>{skill.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
