import Image from "next/image";
import React from "react";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div className="bg-yellow-300 h-full p-4 rounded-xl px-4">
      <div className="flex justify-center items-center pt-4 pb-2">
        <Image
          src="/เกรียน.jpg"
          width={500}
          height={500}
          alt="profile picture"
          className="w-3/4 aspect-square rounded-full border-4 border-white"
        />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Ittiwat Limprasert</h1>
        <p className="text-base">Java Backend Developer</p>
      </div>

      <div className="py-10 text-center font-bold">"Programming just a language"</div>
      <div className="p-6 mx-1 xl:mx-6 bg-blue-900 rounded-md text-white">
        <p>
          <b>Age:</b> 21
        </p>
        <p>
          <b>Status:</b> Single
        </p>
        <p>
          <b>Location:</b> Nakhon Sri Thammarat
        </p>
      </div>
    </div>
  );
};

export default Profile;
