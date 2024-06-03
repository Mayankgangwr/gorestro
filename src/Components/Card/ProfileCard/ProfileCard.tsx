import React from 'react';

interface Props {
    name: string;
    postion: string;
    phoneNumber: string;
    image: string;
} 


const ProfileCard: React.FC<Props> = ({ name, postion, phoneNumber, image }) => {
    return (
        <div className="flex items-center w-full justify-center">
            <div className="">
                <div className="bg-white shadow-xl rounded-lg py-3">
                    <div className="photo-wrapper p-2">
                        <img className="w-32 h-32 rounded-full mx-auto" src={image} alt={name} />
                    </div>
                    <div className="p-2">
                        <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{name}</h3>
                        <div className="text-center text-gray-400 text-xs font-semibold">
                            <p>{postion}</p>
                        </div>
                        <table className="text-xs my-3">
                            <tbody>
                                <tr>
                                    <td className="px-2 py-2 text-gray-500 font-semibold">Address</td>
                                    <td className="px-2 py-2">{"To convert the given HTML code into a React component using TypeScript, you can create a functional component. Here's how you can do it:"}</td>
                                </tr>
                                <tr>
                                    <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                                    <td className="px-2 py-2">{phoneNumber}</td>
                                </tr>
                                <tr>
                                    <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                    <td className="px-2 py-2">{"iammayankgangwarbly@gmail.com"}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="text-center my-3">
                            <a className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">View Profile</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
