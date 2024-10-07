import { TouchableOpacity, Text } from "react-native";
import { ButtonProps } from "../types";

export function Button({ onPress, title }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
