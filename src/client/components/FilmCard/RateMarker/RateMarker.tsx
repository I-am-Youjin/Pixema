import React, { ReactNode, useState } from "react";
import { GreenMarker, YellowMarker, OrangeMarker, Text } from "./styles";

interface RateMarkerType {
  children: ReactNode;
  isAbsolute: boolean;
}

const RateMarker: React.FC<RateMarkerType> = ({ children, isAbsolute }) => {
  const n = children;
  if ((n! as number) < 5) {
    return (
      <OrangeMarker $isAbsolute={isAbsolute}>
        <Text>{children}</Text>
      </OrangeMarker>
    );
  } else if ((n! as number) < 7) {
    return (
      <YellowMarker $isAbsolute={isAbsolute}>
        <Text>{children}</Text>
      </YellowMarker>
    );
  } else {
    return (
      <GreenMarker $isAbsolute={isAbsolute}>
        <Text>{children}</Text>
      </GreenMarker>
    );
  }
};

export default RateMarker;
