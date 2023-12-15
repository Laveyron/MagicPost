import { useEffect, useState } from "react";
import SelectAddress from "../SelectAddress/SelectAddress.jsx";
import { apiGetPublicProvinces } from "../../../Services/app.jsx";
import { apiGetPublicDistrict } from "../../../Services/app.jsx";
import { apiGetPublicWard } from "../../../Services/app.jsx";
import Input from "@mui/material/Input";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import React from "react";

export default function SenderAdd({ refs }) {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");

  useEffect(() => {
    const fetchPublicProvince = async () => {
      const response = await apiGetPublicProvinces();
      if (response.status === 200) {
        setProvinces(response?.data.results);
      }
    };
    fetchPublicProvince();
  }, []);
  useEffect(() => {
    const fetchPublicDistrict = async () => {
      const response = await apiGetPublicDistrict(province);
      if (response.status === 200) {
        setDistricts(response.data?.results);
      }
    };
    province && fetchPublicDistrict();
    !province && setDistricts([]);
  }, [province]);

  useEffect(() => {
    const fetchPublicWard = async () => {
      const response = await apiGetPublicWard(district);
      if (response.status === 200) {
        setWards(response.data?.results);
      }
    };
    district && fetchPublicWard();
    !district && setDistricts([]);
  }, [province, district]);

  return (
    <>
      <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
        <SelectAddress
          label="Tỉnh thành phố"
          options={provinces}
          setValue={setProvince}
          type="province"
          value={province}
        />
        <SelectAddress
          label="Quận/huyện"
          options={districts}
          setValue={setDistrict}
          type="district"
          value={district}
        />
        <SelectAddress
          label="Phường/xã"
          options={wards}
          setValue={setWard}
          type="ward"
          value={ward}
        />
      </Stack>
      <Stack direction={"row"} sx={{ mb: 4 }}>
        <Input
          variant="contained"
          fullWidth
          sx={{
            "&:after": {
              border: "2px solid green",
            },
          }}
          value={`${
            ward
              ? `${wards?.find((item) => item.ward_id === ward)?.ward_name},`
              : ""
          } ${
            district
              ? `${
                  districts?.find((item) => item.district_id === district)
                    ?.district_name
                },`
              : ""
          } ${
            province
              ? provinces?.find((item) => item.province_id === province)
                  ?.province_name
              : ""
          }`}
        />
        <FormControlLabel
          value={`${
            ward
              ? `${wards?.find((item) => item.ward_id === ward)?.ward_name},`
              : ""
          } ${
            district
              ? `${
                  districts?.find((item) => item.district_id === district)
                    ?.district_name
                },`
              : ""
          } ${
            province
              ? provinces?.find((item) => item.province_id === province)
                  ?.province_name
              : ""
          }`}
          control={<Checkbox {...refs} />}
          required
        />
      </Stack>
    </>
  );
}