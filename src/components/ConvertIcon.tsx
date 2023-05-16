interface MyComponentProps {
  width?: string;
  height?: string;
  fill?: string;
  stroke?: string;
}

interface Props {
  width?: string;
  widthM?: string;
  height?: string;
  heightM?: string;
  fill?: string;
  stroke?: string;
  Icon: React.FC<MyComponentProps>;
}

function ConvertICon({
  width,
  height,
  fill,
  stroke,
  Icon,
  widthM,
  heightM,
}: Props) {
  return (
    <>
      <div className="sm:flex hidden items-center justify-center">
        <Icon width={width} height={height} fill={fill} stroke={stroke} />
      </div>
      <div className="sm:hidden flex items-center justify-center">
        <Icon
          width={widthM || width}
          height={heightM || height}
          fill={fill}
          stroke={stroke}
        />
      </div>
    </>
  );
}
export default ConvertICon;
