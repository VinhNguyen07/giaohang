import React from "react";
import { Col } from "antd";
import { WrapperHeader } from "./style";

const FootComponent = () => {
  return (
    <div>
      <WrapperHeader>
        <Col span={8}>
          <h4>CÔNG TY CỔ PHẦN DỊCH VỤ GIAO HÀNG</h4>
          Công ty giao nhận đầu tiên tại Việt Nam được thành lập với sứ mệnh
          phục vụ nhu cầu vận chuyển chuyên nghiệp của các đối tác Thương mại
          điện tử trên toàn quốc. Giấy CNĐKDN số 0311907295 do Sở Kế Hoạch và
          Đầu Tư TP HCM cấp lần đầu ngày 02/08/2012, cấp thay đổi lần thứ 20:
          ngày 25/06/2024. Giấy phép bưu chính số 310/GP-BTTTT do Bộ Thông tin
          và Truyền thông cấp lần đầu ngày 19/11/2014, cấp điều chỉnh lần thứ 2:
          ngày 02/08/2019. Văn bản xác nhận thông báo hoạt động bưu chính số
          2438/XN-BTTTT do Bộ Thông tin và Truyền thông cấp lần đầu ngày
          01/02/2013, cấp điều chỉnh lần thứ 2: ngày 26/07/2019.
        </Col>
        <Col span={4} text-align="center" gutter={[40, 4]}>
          <h4 text-align="center">VỀ GHN</h4>
          <Col span={4} />
          Giới thiệu GH
          <Col span={4} />
          Hệ thống bưu cục
          <Col span={4} />
          Công Nghệ
          <Col span={4} />
          GHN Xu
          <Col span={4} />
          Cơ hội việc làm
          <Col span={4} />
          Liên hệ
        </Col>
        <Col span={6}>
          <h4>THÔNG TIN DỊCH VỤ</h4>
          <Col span={6} />
          Bảng giá
          <Col span={6} />
          Dịch vụ giao hàng
          <Col span={6} />
          Quy trình gửi hàng
          <Col span={6} />
          Khai báo giá trị hàng hóa
          <Col span={6} />
          Hàng hoá không vận chuyển
          <Col span={6} />
          Câu hỏi thường gặp
        </Col>
        <Col span={6}>
          <h4>THÔNG TIN</h4>
          <Col span={6} />
          Chính sách bồi thường
          <Col span={6} />
          Quy định về khiếu nại
          <Col span={6} />
          Điều khoản sử dụng
          <Col span={6} />
          Tin tức GHN
          <Col span={6} />
          Khuyến mãi
          <Col span={6} />
          Kiến thức giao hàng
          <Col span={6} />
          Tip bán hàng
          <Col span={6} />
          Chiến binh GHN
          <Col span={6} />
          Chính sách bảo mật
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default FootComponent;
