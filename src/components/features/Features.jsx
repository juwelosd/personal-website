import React from 'react';
import Title from '../title/Title';
import Card from '../features/Card';
import {MdBusinessCenter} from 'react-icons/md';
import {IoIosApps} from 'react-icons/io';
import {TiArrowMaximiseOutline} from 'react-icons/ti';

import {FaMobileRetro} from 'react-icons/fa6';
import {SiInfluxdb} from 'react-icons/si';
import {SiHostinger} from 'react-icons/si';

function Features() {
  return (
    <section id="features" className=" container w-full  pt-10 pb-20  ">
      
      <Title title="Features" des="What I do" />

      <div className="grid grid-cols-3 gap-20">
        <Card
          title="Business Stratagy"
          des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, dolorem? "
          icon={<MdBusinessCenter className="animate-bounce" />}
        />
        <Card
          title="App Development"
          des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, dolorem? "
          icon={<IoIosApps className="animate-bounce" />}
        />
        <Card
          title="SEO Optimisation"
          des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, dolorem? "
          icon={<TiArrowMaximiseOutline className="animate-bounce" />}
        />
        <Card
          title="Mobile Development"
          des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,
       dolorem? "
          icon={<FaMobileRetro className="animate-bounce" />}
        />
        <Card
          title="UX Design"
          des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, dolorem? "
          icon={<SiInfluxdb className="animate-bounce" />}
        />
        <Card
          title="Hosting Websites"
          des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, dolorem? "
          icon={<SiHostinger className="animate-bounce" />}
        />
      </div>
    </section>
  );
}

export default Features;
