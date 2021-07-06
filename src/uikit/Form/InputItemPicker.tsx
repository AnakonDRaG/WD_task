import React, { useEffect, useRef, useState } from "react";
import { CustomInputProps } from "./Input";
import RNPickerSelect, { PickerSelectProps } from "react-native-picker-select";
import { useField } from "@unform/core";
import { useTheme } from "styled-components";
import { Details } from "uikit/Typography";
import BoxBordered from "uikit/boxes/BoxBordered";

export const InputItemPicker: React.FC<CustomInputProps<PickerSelectProps>> = (props) => {
  const pickerRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(props.name);
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const theme = useTheme();

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: pickerRef.current,
      getValue: ref => {
        return ref.props.value || "";
      },
      clearValue: ref => {
        ref.props.onValueChange(ref.props.placeholder.value);
      },
      setValue: (_, value: string) => {
        setSelectedValue(value);
      }
    });
  }, [fieldName, registerField]);

  return (
    <>
      {error && <Details color="danger">{error}</Details>}
      <BoxBordered width="100%"
                   borderRadius={theme.sizes.borderRadius}
                   borderColor={error && theme.gradients.danger}
      >
        <RNPickerSelect {...props}
                        ref={pickerRef}
                        placeholder={{
                          label: props.placeholder || "Пусто",
                          value: selectedValue
                        }}
                        value={selectedValue}
                        onValueChange={setSelectedValue}
                        pickerProps={{
                          style: {
                            height: 42,
                            margin: 4
                          }
                        }}
        />
      </BoxBordered>
    </>
  );
};
