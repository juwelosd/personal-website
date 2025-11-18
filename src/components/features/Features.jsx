import React from 'react';
import Title from '../title/Title';
import Card from '../features/Card';
import { MdBusinessCenter } from 'react-icons/md';
import { IoIosApps } from 'react-icons/io';
import { TiArrowMaximiseOutline } from 'react-icons/ti';
import { FaMobileRetro } from 'react-icons/fa6';
import { SiInfluxdb, SiHostinger } from 'react-icons/si';

function Features() {
  return (
    <section id="features" className="w-full px-4 sm:px-6 lg:px-20 pt-10 pb-20">
      <div className="border-b border-black py-20">
        <Title title="Features" des="What I do" />

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card
            title="Business Strategy"
            des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, dolorem?"
            icon={<MdBusinessCenter className="animate-bounce text-5xl sm:text-4xl md:text-5xl lg:text-6xl text-primary" />}
          />
          <Card
            title="App Development"
            des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, dolorem?"
            icon={<IoIosApps className="animate-bounce text-5xl sm:text-4xl md:text-5xl lg:text-6xl text-primary" />}
          />
          <Card
            title="SEO Optimisation"
            des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, dolorem?"
            icon={<TiArrowMaximiseOutline className="animate-bounce text-5xl sm:text-4xl md:text-5xl lg:text-6xl text-primary" />}
          />
          <Card
            title="Mobile Development"
            des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, dolorem?"
            icon={<FaMobileRetro className="animate-bounce text-5xl sm:text-4xl md:text-5xl lg:text-6xl text-primary" />}
          />
          <Card
            title="UX Design"
            des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, dolorem?"
            icon={<SiInfluxdb className="animate-bounce text-5xl sm:text-4xl md:text-5xl lg:text-6xl text-primary" />}
          />
          <Card
            title="Hosting Websites"
            des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, dolorem?"
            icon={<SiHostinger className="animate-bounce text-5xl sm:text-4xl md:text-5xl lg:text-6xl text-primary" />}
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
