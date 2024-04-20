const Wave = ({ rotate = true }) => {
  let transform = rotate ? "rotate(180deg)" : "rotate(0deg)";

  return (
    <svg
      id="wave"
      style={{ transform: transform }}
      viewBox="0 0 1440 150"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
          <stop
            stop-color="rgb(10, 168, 167)"
            offset="0%"
            data-darkreader-inline-stopcolor=""
          ></stop>
          <stop
            stop-color="rgb(50, 268, 100)"
            offset="100%"
            data-darkreader-inline-stopcolor=""
          ></stop>
        </linearGradient>
      </defs>
      <path
        fill="rgb(237, 246, 245)"
        d="M0,135L48,115C96,95,192,55,288,47.5C384,40,480,65,576,65C672,65,768,40,864,40C960,40,1056,65,1152,77.5C1248,90,1344,90,1440,87.5C1536,85,1632,80,1728,80C1824,80,1920,85,2016,90C2112,95,2208,100,2304,92.5C2400,85,2496,65,2592,70C2688,75,2784,105,2880,110C2976,115,3072,95,3168,95C3264,95,3360,115,3456,112.5C3552,110,3648,85,3744,65C3840,45,3936,30,4032,37.5C4128,45,4224,75,4320,90C4416,105,4512,105,4608,97.5C4704,90,4800,75,4896,80C4992,85,5088,110,5184,122.5C5280,135,5376,135,5472,120C5568,105,5664,75,5760,75C5856,75,5952,105,6048,115C6144,125,6240,115,6336,115C6432,115,6528,125,6624,120C6720,115,6816,95,6864,85L6912,75L6912,150L6864,150C6816,150,6720,150,6624,150C6528,150,6432,150,6336,150C6240,150,6144,150,6048,150C5952,150,5856,150,5760,150C5664,150,5568,150,5472,150C5376,150,5280,150,5184,150C5088,150,4992,150,4896,150C4800,150,4704,150,4608,150C4512,150,4416,150,4320,150C4224,150,4128,150,4032,150C3936,150,3840,150,3744,150C3648,150,3552,150,3456,150C3360,150,3264,150,3168,150C3072,150,2976,150,2880,150C2784,150,2688,150,2592,150C2496,150,2400,150,2304,150C2208,150,2112,150,2016,150C1920,150,1824,150,1728,150C1632,150,1536,150,1440,150C1344,150,1248,150,1152,150C1056,150,960,150,864,150C768,150,672,150,576,150C480,150,384,150,288,150C192,150,96,150,48,150L0,150Z"
      ></path>
      <defs>
        <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
          <stop
            stop-color="rgb(237, 246, 245)"
            offset="0%"
            data-darkreader-inline-stopcolor=""
          ></stop>
          <stop
            stop-color="rgb(237, 246, 245)"
            offset="100%"
            data-darkreader-inline-stopcolor=""
          ></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#sw-gradient-1)"
        d="M0,105L48,87.5C96,70,192,35,288,40C384,45,480,90,576,110C672,130,768,125,864,112.5C960,100,1056,80,1152,62.5C1248,45,1344,30,1440,40C1536,50,1632,85,1728,102.5C1824,120,1920,120,2016,120C2112,120,2208,120,2304,105C2400,90,2496,60,2592,55C2688,50,2784,70,2880,72.5C2976,75,3072,60,3168,57.5C3264,55,3360,65,3456,62.5C3552,60,3648,45,3744,47.5C3840,50,3936,70,4032,72.5C4128,75,4224,60,4320,57.5C4416,55,4512,65,4608,75C4704,85,4800,95,4896,100C4992,105,5088,105,5184,97.5C5280,90,5376,75,5472,65C5568,55,5664,50,5760,62.5C5856,75,5952,105,6048,97.5C6144,90,6240,45,6336,22.5C6432,0,6528,0,6624,22.5C6720,45,6816,90,6864,112.5L6912,135L6912,150L6864,150C6816,150,6720,150,6624,150C6528,150,6432,150,6336,150C6240,150,6144,150,6048,150C5952,150,5856,150,5760,150C5664,150,5568,150,5472,150C5376,150,5280,150,5184,150C5088,150,4992,150,4896,150C4800,150,4704,150,4608,150C4512,150,4416,150,4320,150C4224,150,4128,150,4032,150C3936,150,3840,150,3744,150C3648,150,3552,150,3456,150C3360,150,3264,150,3168,150C3072,150,2976,150,2880,150C2784,150,2688,150,2592,150C2496,150,2400,150,2304,150C2208,150,2112,150,2016,150C1920,150,1824,150,1728,150C1632,150,1536,150,1440,150C1344,150,1248,150,1152,150C1056,150,960,150,864,150C768,150,672,150,576,150C480,150,384,150,288,150C192,150,96,150,48,150L0,150Z"
      ></path>
    </svg>
  );
};

export default Wave;
