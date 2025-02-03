export const GradientCard = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div
      style={{
        background: `linear-gradient(-180deg, 
              rgba(255, 255, 255, 0) 0%, 
              rgba(255, 255, 255, 1) 48%),
              linear-gradient( -90deg, 
              rgba(255,180,31,0.25) 0%, 
              rgba(255,150,51,0.25) 25%, 
              rgba(255,92,143,0.25) 50%, 
              rgba(155,77,255,0.25) 75%, 
              rgba(77,138,255,0.25) 100%),
              url(/noise.png)
              center top`
      }}
      className="relative overflow-hidden rounded-xl px-4 py-14 sm:px-8 border"
    >
      {children}
    </div>
  );
};
