import React, { useCallback, useEffect, useState } from "react";
import { useField } from "@unform/core";
import { Asset, ImagePickerResponse, launchImageLibrary } from "react-native-image-picker";
import { View } from "react-native";
import styled from "styled-components/native";
import { CirclePlusIcon } from "uikit/Icons";
import { PrimaryButton } from "uikit/Button";
import ImageAutoHeight from "uikit/ImageAutoHeight";
import { CustomInputProps } from "uikit/Form/Input";
import { Details } from "../Typography";


export const ImageGalleryPicker: React.FC<CustomInputProps<any>> =
  (props) => {

    const { fieldName, registerField, defaultValue = [], error } = useField(props.name);
    const [value, setValue] = useState<Asset[]>(defaultValue);

    const handleOnChangeValue = useCallback(
      (resource: ImagePickerResponse) => {
        if (resource.didCancel) return;
        setValue(resource.assets);
      },
      []
    );

    useEffect(() => {
      registerField({
        name: fieldName,
        clearValue: () => {
          setValue([]);
        },
        getValue: () => {
          return value || "";
        },
        setValue: (_, value: Asset[]) => {
          setValue(value);
        }
      });
    }, [value, fieldName, registerField]);


    return (
      <View>
        <ImagesContainer>
          {value.map((asset, index) => {
            return <ImageAutoHeight source={asset}
                                    key={index}
                                    division={2}
                                    height={161}
                                    margin={5}
                                    borderRadius={15}
                                    resizeMode="contain"
            />;
          })}
        </ImagesContainer>
        {error && <Details color="danger">{error}</Details>}
        <PrimaryButton
          iconLeft={CirclePlusIcon}
          title="Фото"
          onPress={() => {
            launchImageLibrary(
              {
                mediaType: "photo",
                selectionLimit: 10
              },
              handleOnChangeValue);
          }} />
      </View>

    );
  };

const ImagesContainer = styled.View`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 0 0 20px 0;

`;


