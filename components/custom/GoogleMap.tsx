import React from "react";

const GoogleMap = () => {
  return (
    <div className="flex items-center justify-center container mx-auto my-5">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.632176675084!2d78.06685447450724!3d9.881194075068837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cfafc98028db%3A0xe9dcfbad32a18880!2sMuththya%20stores!5e0!3m2!1sen!2sin!4v1771865471486!5m2!1sen!2sin"
        width="800"
        height="600"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};

export default GoogleMap;
