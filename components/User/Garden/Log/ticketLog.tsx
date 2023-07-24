//FROM THE USER
export default function TicketLog(){
    return(
        <div className="min-h-[100px] max-w-[500px] rounded-md border-[1px] bg-white border-darkgreen border-opacity-30 overflow-hidden font-Mont text-xs md:text-sm overflow-hidden flex flex-col border-t-[1px] p-4 text-xs md:text-sm overflow-hidden gap-2">
            <div className="flex justify-end text-[10px]">
                MM/DD/YYYY
            </div>
            <div className="font-bold text-lg text-lightgreen">
                Help Request
            </div>
            <div className="font-bold">
                Subject: This is the Subject.
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold underline">
                    Description
                </div>
                <div className="pl-4">
                    This is a description of the issue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed vulputate odio, nec ornare eros. Mauris sagittis hendrerit venenatis. Vestibulum ac ipsum sit amet neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed vulputate odio, nec ornare eros. Mauris sagittis hendrerit venenatis. Vestibulum ac ipsum sit amet neque.
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <div className="font-bold underline">
                    Watering Schedule
                </div>
                <div className="pl-4">
                    This is a description how often a plant is watered. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed vulputate odio, nec ornare eros. 
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold underline">
                    Location
                </div>
                <div className="pl-4">
                    This is a short description where a plant is located. 
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold underline">
                    Temperature & Humidity
                </div>
                <div className="pl-4">
                    This is a short description of the environment temperature and humidity. 
                </div>
            </div>
            <hr className="border-darkgreen border-opacity-20"></hr>

            {/* PHOTOS */}
            <div className="flex flex-col gap-4">
                <div className="flex justify-between">

                    <div className="flex flex-col">
                        <div className=" text-center">
                            Location Photo
                        </div>
                        <div>
                            <div className="border-2 rounded-md border-darkgreen border-opacity-20 w-[70px] h-[70px] md:w-[80px] md:h-[80px] contain">
                                <img src="/photo.png" className=" w-full h-full object-cover overflow-hidden"></img>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className=" text-center">
                            Soil Photo
                        </div>
                        <div>
                            <div className="border-2 rounded-md border-darkgreen border-opacity-20 w-[70px] h-[70px] md:w-[80px] md:h-[80px] contain">
                                <img src="/photo.png" className=" w-full h-full object-cover overflow-hidden"></img>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className=" text-center">
                            Leaf Photo
                        </div>
                        <div>
                            <div className="border-2 rounded-md border-darkgreen border-opacity-20 w-[70px] h-[70px] md:w-[80px] md:h-[80px] contain">
                                <img src="/photo.png" className=" w-full h-full object-cover overflow-hidden"></img>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col">
                    <div className=" text-start">
                        Extra Photos
                    </div>
                    <div className="flex justify-start">
                        <div>
                            <div className="border-2 rounded-md border-darkgreen border-opacity-20 w-[70px] h-[70px] md:w-[80px] md:h-[80px] contain">
                                <img src="/photo.png" className=" w-full h-full object-cover overflow-hidden"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* END PHOTOS */}


        </div>
    )
}