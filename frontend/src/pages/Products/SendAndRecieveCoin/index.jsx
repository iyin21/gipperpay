import React, { useState } from "react";
import SendAndReceiveCoin from "../../../widgets/Modal/sendReceive";

const SendAndReceiveCoinPage = () => {
    const [sendAndReceiveModalOpen, setSendAndReceiveModal] = useState(true);
    return (
        <div>
            {" "}
            <h3>hey</h3>{" "}
            {sendAndReceiveModalOpen && <SendAndReceiveCoin setsendAndReceiveModal={setSendAndReceiveModal} />}{" "}
        </div>
    );
};

export default SendAndReceiveCoinPage;
