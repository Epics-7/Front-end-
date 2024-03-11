const NavBar = () => {
  return (
    <header
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "41px 0px",
        maxWidth: "100%",
        textAlign: "left",
        fontSize: "32px",
        color: "#000",
        fontFamily: "Inter",
      }}
    >
      <div
        style={{
          width: "1170px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0px 0px 0px 21px",
          boxSizing: "border-box",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: "100%",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "5px 0px 0px",
            }}
          >
          <div style={{ position: "relative" }}>
    <img src="/logo.png" alt="Logo" /> Plantify
</div>


          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "0px 23px",
              maxWidth: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0px 10px 0px 0px",
              }}
            >
              <div style={{ position: "relative" }}>Home</div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0px 10px 0px 0px",
              }}
            >
              <div style={{ position: "relative" }}>About</div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "5px 0px 0px",
              }}
            >
              <div style={{ position: "relative" }}>Working</div>
            </div>
            <div style={{ position: "relative" }}>SignUp</div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0px 22px 0px 0px",
              }}
            >
              <div style={{ position: "relative" }}>LogIn</div>
            </div>
            <img
              style={{
                height: "64px",
                width: "60px",
                position: "relative",
                objectFit: "cover",
              }}
              loading="lazy"
              alt=""
              src="/image 2.png"
            />
          </div>
        </div>
      </div>
      <img
        style={{
          alignSelf: "stretch",
          height: "4px",
          position: "relative",
          maxWidth: "100%",
          overflow: "hidden",
          flexShrink: "0",
          objectFit: "contain",
        }}
        loading="lazy"
        alt=""
      />
    </header>
  );
};

export default NavBar;
