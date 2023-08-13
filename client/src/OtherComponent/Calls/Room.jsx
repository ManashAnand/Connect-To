import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";

const Room = () => {
  const { videoUid } = useParams();
  // console.log(param?.videoUid)

  const myMeeting = async (element) => {
    const appId = 61475271;
    const serverSecret = "a13cb066832ab0eec8b1f6d216f13e36";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      videoUid,
      Date.now().toString(),
      "Manash",
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
        container: element,
        scenario:{
            mode: ZegoUIKitPrebuilt.VideoConference,
        }
    })
  };

  return <><div ref={myMeeting}/></>;
};

export default Room;
