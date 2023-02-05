import React from "react";

const Signup = () => {
    return (
        <div>
            <div className="text-gray-200 flex p-10 justify-between bg-gray-900 flex-col sm:flex-row">
                <div>
                    <h1 className="font-bold">Sign up for Venus Jewellers</h1>
                    <p className="text-[#D2AC47] font-bold">
                        Get E-mail updates about our latest shop and special offers.
                    </p>
                </div>
                <div className="pt-2">
                    <div className="flex">
                        <input
                            type="text"
                            className="p-2 rounded-l-lg w-[400px]"
                            placeholder="Your email address"
                        />
                        <button type="button" className="p-2 bg-[#D2AC47] rounded-r-lg">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
