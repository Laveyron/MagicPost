import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import FormHelperText from "@mui/material/FormHelperText";
import useMediaQuery from "@mui/material/useMediaQuery";
import "../../../../Assets/Styles/Form/Form.css";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import ReceiverAdd from "../../../Funtions/SelectAdd/ReceiverAdd.jsx";
import SenderAdd from "../../../Funtions/SelectAdd/ReceiverAdd.jsx";
import { GenerateCode } from "../../../Funtions/GenerateCode/GenerateCode.jsx";
import { Typography } from "@mui/material";

export default function Form() {
  const match = useMediaQuery("(max-width:800px)");

  const [code, setCode] = useState(GenerateCode);
  const [formState, setFormState] = useState(false);

  type FormValues = {
    sender: {
      senderName: string;
      senderPhone: string;
      senderAddr: string;
      senderAd: string;
    };
    receiver: {
      receiverName: string;
      receiverPhone: string;
      receiverAddr: string;
      receiverAd: string;
    };
    package: {
      productType: string;
      productName: string;
      productValue: string;
      productWeight: string;
      quantity: string;
      size: {
        length: string;
        width: string;
        height: string;
      };
      productCategory: string;
    };
    payment: string;
    note: string;
    ID: string;
  };

  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    setFormState(true);
    console.log(data);
  };

  function generateCode() {
    setCode(GenerateCode);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} direction={`${match ? "column" : "row"}`}>
          <Paper id="paper" style={{ width: "40%" }} elevation={3}>
            <div className="LABEL">NGƯỜI GỬI</div>
            <Divider sx={{ marginBottom: 4 }} />
            <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
              <TextField
                id="outlined-basic"
                label="Họ tên"
                variant="outlined"
                fullWidth
                required
                // name="sender"
                {...register("sender.senderName")}
              />
              <TextField
                id="outlined-basic"
                label="Điện thoại"
                variant="outlined"
                fullWidth
                required
                // name="senderPhone"
                {...register("sender.senderPhone")}
              />
            </Stack>
            <SenderAdd refs={register("sender.senderAd")} />
            <TextField
              id="outlined-basic"
              label="Địa chỉ"
              variant="outlined"
              fullWidth
              required
              sx={{ mb: 6 }}
              // name="senderAddr"
              {...register("sender.senderAddr")}
            />
            <div className="LABEL">NGƯỜI NHẬN</div>
            <Divider sx={{ marginBottom: 4 }} />
            <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
              <TextField
                id="outlined-basic"
                label="Họ tên"
                variant="outlined"
                fullWidth
                required
                // name="receiver"
                {...register("receiver.receiverName")}
              />
              <TextField
                id="outlined-basic"
                label="Điện thoại"
                variant="outlined"
                fullWidth
                required
                // name="receiverPhone"
                {...register("receiver.receiverPhone")}
              />
            </Stack>
            <ReceiverAdd refs={register("receiver.receiverAd")} />
            <TextField
              id="outlined-basic"
              label="Địa chỉ"
              variant="outlined"
              fullWidth
              required
              sx={{ mb: 6 }}
              // name="receiverAddr"
              {...register("receiver.receiverAddr")}
            />
          </Paper>
          <Paper id="paper" style={{ width: "35%" }} elevation={3}>
            <div className="LABEL">THÔNG TIN BƯU GỬI</div>
            <Divider sx={{ marginBottom: 4 }} />
            <div
              style={{ marginBottom: 4, fontFamily: "arial", fontSize: "18px" }}
            >
              Loại Hàng
            </div>
            <RadioGroup row sx={{ mb: 4 }}>
              <FormControlLabel
                value="parcel"
                control={<Radio />}
                label="Bưu kiện"
                sx={{ marginLeft: "15%" }}
                {...register("package.productType")}
              />
              <FormControlLabel
                value="document"
                control={<Radio />}
                label="Tài liệu"
                sx={{ marginLeft: "15%" }}
                {...register("package.productType")}
              />
            </RadioGroup>
            <Divider sx={{ mb: 4 }} />
            <TextField
              id="outlined-basic"
              label="Tên sản phẩm"
              variant="outlined"
              fullWidth
              required
              sx={{ mb: 4 }}
              // name="product"
              {...register("package.productName")}
            />
            <Stack spacing={1} direction="row" sx={{ marginBottom: 4 }}>
              <TextField
                id="outlined-basic"
                label="Giá trị "
                variant="outlined"
                fullWidth
                // required
                sx={{ mb: 4 }}
                {...register("package.productValue")}
              />
              <TextField
                id="outlined-basic"
                label="K.lượng"
                variant="outlined"
                fullWidth
                // required
                sx={{ mb: 4 }}
                {...register("package.productWeight")}
              />
              <TextField
                id="outlined-basic"
                label="S.lượng"
                variant="outlined"
                fullWidth
                // required
                sx={{ mb: 4 }}
                {...register("package.quantity")}
              />
            </Stack>
            <Divider sx={{ mb: 4 }} />
            <div
              style={{
                marginBottom: "15px",
                fontFamily: "arial",
                fontSize: "18px",
              }}
            >
              Kích thước
            </div>
            <Stack spacing={1} direction="row" sx={{ marginBottom: 4 }}>
              <TextField
                id="outlined-basic"
                label="Dài"
                variant="outlined"
                fullWidth
                // required
                sx={{ mb: 4 }}
                {...register("package.size.length")}
              />
              <TextField
                id="outlined-basic"
                label="Rộng"
                variant="outlined"
                fullWidth
                // required
                sx={{ mb: 4 }}
                {...register("package.size.width")}
              />
              <TextField
                id="outlined-basic"
                label="Cao"
                variant="outlined"
                fullWidth
                // required
                sx={{ mb: 4 }}
                {...register("package.size.height")}
              />
            </Stack>
            <Divider sx={{ mb: 4 }} />
            <div
              style={{
                marginBottom: "15px",
                fontFamily: "arial",
                fontSize: "18px",
              }}
            >
              Tính chất hàng hóa đặc biệt
            </div>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    value="fragile"
                    {...register("package.productCategory")}
                  />
                }
                label="Dễ vỡ"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="liquid"
                    {...register("package.productCategory")}
                  />
                }
                label="Chất lỏng"
                sx={{ ml: 4 }}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="magnetic"
                    {...register("package.productCategory")}
                  />
                }
                label="Từ tính, Pin"
                sx={{ ml: 4 }}
              />
            </FormGroup>
          </Paper>
          <Paper id="paper" style={{ width: "25%" }} elevation={3}>
            <div className="LABEL">BƯU GỬI</div>
            <Divider sx={{ mb: 4 }} />
            <div
              style={{
                fontFamily: "arial",
                fontSize: "18px",
              }}
            >
              Tiền thu hộ
            </div>
            <FormHelperText style={{ margin: "0px" }}>
              Hình Thức thanh toán tiền COD
            </FormHelperText>
            <FormControlLabel
              control={<Checkbox />}
              label="Thu hộ bằng tiền hàng"
            />
            <TextField placeholder="0" fullWidth sx={{ mb: 4 }} />
            <div
              style={{
                marginBottom: 4,
                fontFamily: "arial",
                fontSize: "18px",
                marginLeft: "5%",
              }}
            >
              Người trả cước
            </div>
            <RadioGroup row sx={{ mb: 4 }}>
              <FormControlLabel
                value="sender"
                control={<Radio />}
                label="Người gửi"
                sx={{
                  marginLeft: "5%",
                  "&.Mui-checked": {
                    color: "#003e29",
                  },
                }}
                required
                {...register("payment")}
              />
              <FormControlLabel
                value="receiver"
                control={<Radio />}
                label="Người nhận"
                sx={{ marginLeft: "5%" }}
                {...register("payment")}
                required
              />
            </RadioGroup>
            <TextField
              fullWidth
              multiline
              rows={5}
              label="Ghi chú"
              sx={{ mb: 4 }}
              {...register("note")}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Đồng ý với Điều khoản quy định"
              required
            />
            <Button
              variant="contained"
              type="submit"
              fullWidth
              style={{ fontWeight: "bold", background: "#003e29" }}
              onClick={generateCode}
              value={code}
              {...register("ID")}
            >
              Tạo bưu gửi
            </Button>
            {formState ? (
              <div>
                <Typography>Tạo đơn Thành Công</Typography>
                <Button
                  variant="contained"
                  fullWidth
                  style={{ fontWeight: "bold", background: "#003e29" }}
                >
                  IN
                </Button>
              </div>
            ) : (
              ""
            )}
          </Paper>
        </Stack>
      </form>
    </div>
  );
}