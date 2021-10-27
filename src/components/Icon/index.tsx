import React from 'react';

import { Container } from './styles';

import { MdWork, MdAssignment, MdBusiness } from 'react-icons/md';
import { FiUser, FiMail, FiLock, FiUnlock } from 'react-icons/fi';
import { FaSchool, FaBirthdayCake } from 'react-icons/fa';
import { IoIosSchool } from 'react-icons/io';

interface IconInterface {
  initialValue?: string;
  name: string;
  style?: { [key: string]: React.CSSProperties };
}

const Icon: React.FC<IconInterface> = ({ name, style }) => {
  function renderSwitch(param: string): React.ReactElement {
    const render: { [key: string]: React.ReactElement } = {
      name: <FiUser />,
      last_institution: <FaSchool />,
      education_level: <IoIosSchool />,
      currently_company: <MdWork />,
      currently_title: <MdAssignment />,
      own_company: <MdBusiness />,
      email: <FiMail />,
      confirmPassword: <FiUnlock />,
      birth: <FaBirthdayCake />,
    };
    return render[param] || <FiLock />;
  }

  return <Container style={style?.icon}>{renderSwitch(name)}</Container>;
};

export default Icon;
