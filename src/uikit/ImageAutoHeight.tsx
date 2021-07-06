import React  from "react";
import { Dimensions, Image, ImageProps} from "react-native";
import styled from "styled-components/native";
import { useTheme } from "styled-components";

interface ImageAutoHeightProps extends ImageProps {
  margin?: number,
  division?: number,
  borderRadius?: number
}

const ImageAutoHeight: React.FC<ImageAutoHeightProps> = (props) => {
  const theme = useTheme();

  return (<ImageAutoHeightComponent {...props}
                                    style={{
                                      width: Dimensions.get("window").width / (props.division || 1) - theme.sizes.container.x * 2 - (props.margin || 0)
                                    }}
  />);
};

const ImageAutoHeightComponent = styled(Image)`
  width: ${({ width }) => width + 'px' || "126px"};
  height: ${({ height }) => height + 'px' || "126px"};
  border-radius: ${({ borderRadius }) => borderRadius + "px" || "0px"};
`;


export default ImageAutoHeight;
