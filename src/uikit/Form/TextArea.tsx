import React from "react";
import { TextInputProps } from "react-native";
import styled from "styled-components/native";
import { CustomInputProps, Input } from "uikit/Form/Input";

export const TextArea: React.FC<CustomInputProps<TextInputProps>> =
  (props) => <TextAreaComponent {...props} />;

const TextAreaComponent = styled(Input)`
  height: 100px;
`;
