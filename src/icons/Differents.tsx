function IconSearch({ width, height, fill, stroke }: any) {
  return (
    <svg
      width={width || "24"}
      height={height || "24"}
      viewBox="0 0 24 24"
      fill={fill || "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_746_11821)">
        <path
          d="M15.5001 14.0001H14.7101L14.4301 13.7301C15.6301 12.3301 16.2501 10.4201 15.9101 8.39014C15.4401 5.61014 13.1201 3.39014 10.3201 3.05014C6.09014 2.53014 2.53014 6.09014 3.05014 10.3201C3.39014 13.1201 5.61014 15.4401 8.39014 15.9101C10.4201 16.2501 12.3301 15.6301 13.7301 14.4301L14.0001 14.7101V15.5001L18.2501 19.7501C18.6601 20.1601 19.3301 20.1601 19.7401 19.7501C20.1501 19.3401 20.1501 18.6701 19.7401 18.2601L15.5001 14.0001ZM9.50014 14.0001C7.01014 14.0001 5.00014 11.9901 5.00014 9.50014C5.00014 7.01014 7.01014 5.00014 9.50014 5.00014C11.9901 5.00014 14.0001 7.01014 14.0001 9.50014C14.0001 11.9901 11.9901 14.0001 9.50014 14.0001Z"
          fill={fill || "white"}
        />
      </g>
      <defs>
        <clipPath id="clip0_746_11821">
          <rect
            width={width || "24"}
            height={height || "24"}
            fill={fill || "white"}
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export { IconSearch };
