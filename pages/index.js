import React from "react";
import { AnchorHeader, Markdown } from "../components";

const intro = `
Join this monthly meetup for developers. We gather around a technical topic every month with food and drinks provided.

The point of the meetup is to watch a documentary or a talk or two related to the current topic while meeting new people.
`;

const secondary = `
We follow [Berlin code of conduct](http://berlincodeofconduct.org/).
`;

const Index = () => (
  <>
    <section className="intro intro_home">
      <div className="intro--main">
        <Markdown source={intro} />
      </div>
      <aside className="intro--aside">
        <Markdown source={secondary} />
      </aside>
    </section>

    <AnchorHeader level={2}>Location</AnchorHeader>
    {/*
    <div className="grid--full speakers">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.6437775271643!2d16.364445015898696!3d48.2134769538503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d07166565de3f%3A0xa0d26ccf9e931e13!2sSAE+Institute+Wien!5e0!3m2!1sen!2sat!4v1558083379672!5m2!1sen!2sat"
        width="100%"
        height="480"
        frameBorder="0"
        title="SAE Institute Wien"
      />
    </div>
    */}
  </>
);

export default Index;
