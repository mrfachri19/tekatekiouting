import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LoginPage,
  // ==============
  Juicer,
  Juicer2,
  Souncore,
  Souncore2,
  AdaptorCharge,
  AdaptorCharge2,
  Airfrayer,
  Airfrayer2,
  Airfrayer2_2,
  Airfrayer_2,
  Auckey,
  Auckey2,
  Bodypack,
  Bodypack2,
  Bodypack2_2,
  Bodypack_2,
  Huweiband,
  Huweiband2,
  Huweiband2_2,
  Huweiband_2,
  Jbl,
  Jbl2,
  Jbl2_2,
  Jbl_2,
  Keyboardazazz,
  Keyboardazazz2,
  Powerbank,
  Powerbank2,
  Powerbank2_2,
  Powerbank_2,
  Redmibuds,
  Redmibuds2,
  Redmibuds2_2,
  Redmibuds_2,
  Smartband,
  Smartband2,
  Soundbar,
  Soundbar2,
  Soundbar2_2,
  Soundbar_2,
  Watch,
  Watch2,
} from "../pages";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage exact />} />
        {/* Juicer Philip */}
        <Route path="/doorprize1" element={<Juicer />} />
        <Route path="/doorprize1_2" element={<Juicer2 />} />
        {/* souncore */}
        <Route path="/doorprize2" element={<Souncore />} />
        <Route path="/doorprize2_2" element={<Souncore2 />} />
        {/* adaptor charge */}
        <Route path="/doorprize3" element={<AdaptorCharge />} />
        <Route path="/doorprize3_2" element={<AdaptorCharge2 />} />
        {/* airfarayer1 */}
        <Route path="/doorprize4" element={<Airfrayer />} />
        <Route path="/doorprize4_2" element={<Airfrayer2 />} />
        {/* airfrayer2 */}
        <Route path="/doorprize5" element={<Airfrayer_2 />} />
        <Route path="/doorprize5_2" element={<Airfrayer2_2 />} />
        {/* auckey */}
        <Route path="/doorprize6" element={<Auckey />} />
        <Route path="/doorprize6_2" element={<Auckey2 />} />
        {/* bodypack1 */}
        <Route path="/doorprize7" element={<Bodypack />} />
        <Route path="/doorprize7_2" element={<Bodypack2 />} />
        {/* bodypack2 */}
        <Route path="/doorprize8" element={<Bodypack_2 />} />
        <Route path="/doorprize8_2" element={<Bodypack2_2 />} />
        {/* huweiband1 */}
        <Route path="/doorprize9" element={<Huweiband />} />
        <Route path="/doorprize9_2" element={<Huweiband2 />} />
        {/* huweiband2 */}
        <Route path="/doorprize10" element={<Huweiband_2 />} />
        <Route path="/doorprize10_2" element={<Huweiband2_2 />} />
        {/* jbl1 */}
        <Route path="/doorprize11" element={<Jbl />} />
        <Route path="/doorprize11_2" element={<Jbl2 />} />
        {/* jbl12 */}
        <Route path="/doorprize12" element={<Jbl_2 />} />
        <Route path="/doorprize12_2" element={<Jbl2_2 />} />
        {/* Keyoard */}
        <Route path="/doorprize13" element={<Keyboardazazz />} />
        <Route path="/doorprize13_2" element={<Keyboardazazz2 />} />
        {/* Powerbank1 */}
        <Route path="/doorprize14" element={<Powerbank />} />
        <Route path="/doorprize14_2" element={<Powerbank2 />} />
        {/* powerbank2 */}
        <Route path="/doorprize15" element={<Powerbank_2 />} />
        <Route path="/doorprize15_2" element={<Powerbank2_2 />} />
        {/* redmibuds1 */}
        <Route path="/doorprize16" element={<Redmibuds />} />
        <Route path="/doorprize16_2" element={<Redmibuds2 />} />
        {/* redmibuds2 */}
        <Route path="/doorprize17" element={<Redmibuds_2 />} />
        <Route path="/doorprize17_2" element={<Redmibuds2_2 />} />
        {/* smartband */}
        <Route path="/doorprize18" element={<Smartband />} />
        <Route path="/doorprize18_2" element={<Smartband2 />} />
        {/* soundbar1 */}
        <Route path="/doorprize19" element={<Soundbar />} />
        <Route path="/doorprize19_2" element={<Soundbar2 />} />
        {/* soundbar2 */}
        <Route path="/doorprize20" element={<Soundbar_2 />} />
        <Route path="/doorprize20_2" element={<Soundbar2_2 />} />
        {/* watch */}
        <Route path="/doorprize21" element={<Watch />} />
        <Route path="/doorprize21_2" element={<Watch2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
