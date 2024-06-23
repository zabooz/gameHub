import { Platform } from "../hooks/useGames";
import { Icon} from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";

import {MdPhoneIphone} from 'react-icons/md'
import {SiNintendo} from 'react-icons/si'
import {BsGlobe} from 'react-icons/bs'
import { IconType } from "react-icons";
interface Props {
  platforms: Platform[];
}

function PlatFormIconList({ platforms }: Props) {

  const iconMap:{[key:string]: IconType} = {
    pc:FaWindows,
    playstation: FaPlaystation,
    xbox:FaXbox,
    mac: FaApple,
    linux:FaLinux,
    andoid: FaAndroid,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web:BsGlobe

  }


  return (
    <>
      {platforms.map(platform=> {
        console.log(platform.slug,platform.name)
        return  <Icon as ={iconMap[platform.slug]} color='gray.500' m={1} />

      }

      )}
    </>
  );
}

export default PlatFormIconList;
