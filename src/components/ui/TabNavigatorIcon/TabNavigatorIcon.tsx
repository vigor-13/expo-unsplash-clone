import React from "react";
import {
  IconPhoto,
  IconSearch,
  IconSquarePlus,
  IconUserCircle,
} from "@tabler/icons-react-native";

export type TabNavigatorIconName =
  | "IconPhoto"
  | "IconSearch"
  | "IconSquarePlus"
  | "IconUserCircle";

export interface TabNavigatorIconProps {
  name: TabNavigatorIconName;
  color: string;
  size: number;
}

export const TabNavigatorIcon: React.FC<TabNavigatorIconProps> = (props) => {
  const { name, color, size } = props;

  const renderIcon = () => {
    switch (name) {
      case "IconPhoto":
        return <IconPhoto color={color} size={size} />;
      case "IconSearch":
        return <IconSearch color={color} size={size} />;
      case "IconSquarePlus":
        return <IconSquarePlus color={color} size={size} />;
      case "IconUserCircle":
        return <IconUserCircle color={color} size={size} />;
      default:
        return null;
    }
  };

  return renderIcon();
};
