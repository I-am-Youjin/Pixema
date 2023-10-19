import React, { PropsWithChildren } from "react";
import { GreenMarker, YellowMarker, OrangeMarker, Text } from "./styles";

const RateMarker: React.FC<PropsWithChildren> = ({ children }) => {
  const n = children;
  if ((n! as number) < 5) {
    return (
      <OrangeMarker>
        <Text>{children}</Text>
      </OrangeMarker>
    );
  } else if ((n! as number) < 7) {
    return (
      <YellowMarker>
        <Text>{children}</Text>
      </YellowMarker>
    );
  } else {
    return (
      <GreenMarker>
        <Text>{children}</Text>
      </GreenMarker>
    );
  }
};

export default RateMarker;
