import {
  ArrowBack,
  ArrowForward,
  ArrowOutward,
  ArrowOutwardOutlined,
  ChatBubbleOutline,
  DataSaverOffOutlined,
  EqualizerOutlined,
  HomeOutlined,
  Moving,
  SettingsOutlined,
  TrendingDown,
  WarningAmberOutlined,
} from "@mui/icons-material";
import React from "react";
import "./Dashboard.css";
import AdminChart from "../../Charts/AdminChart";
import AreaCharts from "../../AreaChart/AreaCharts";

export default function Dashboard() {
  return (
    <>
      <div className="MainContain">
        <div className="MidContain">
          <div className="TopDiv">
            <div className="RightDiv">
              <div className="SideRigt">
                <div className="Num">
                  18
                  <div className="Info">
                    <div className="Information">
                      <div className="Data">Technical Hiring</div>
                      <div className="Datas">Average Days to hire</div>
                    </div>
                    <div className="Arrow">
                      <ArrowForward />
                    </div>
                  </div>
                </div>
                <div className="Num">
                  18
                  <div className="Info">
                    <div className="Information">
                      <div className="Data">Technical Hiring</div>
                      <div className="Datas">Average Days to hire</div>
                    </div>
                    <div className="Arrow">
                      <ArrowForward />
                    </div>
                  </div>
                </div>
                <div className="Num">
                  18
                  <div className="Info">
                    <div className="Information">
                      <div className="Data">Technical Hiring</div>
                      <div className="Datas">Average Days to hire</div>
                    </div>
                    <div className="Arrow">
                      <ArrowForward />
                    </div>
                  </div>
                </div>
                <div className="Num">
                  18
                  <div className="Info">
                    <div className="Information">
                      <div className="Data">Technical Hiring</div>
                      <div className="Datas">Average Days to hire</div>
                    </div>
                    <div className="Arrow">
                      <ArrowForward />
                    </div>
                  </div>
                </div>
                <div className="Num">
                  18
                  <div className="Info">
                    <div className="Information">
                      <div className="Data">Technical Hiring</div>
                      <div className="Datas">Average Days to hire</div>
                    </div>
                    <div className="Arrow">
                      <ArrowForward />
                    </div>
                  </div>
                </div>
                <div className="Num">
                  18
                  <div className="Info">
                    <div className="Information">
                      <div className="Data">Technical Hiring</div>
                      <div className="Datas">Average Days to hire</div>
                    </div>
                    <div className="Arrow">
                      <ArrowForward />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="LeftDiv">
              <AdminChart />
            </div>
          </div>

          <div className="BottomDiv">
            <div className="LeftBar">
              <AreaCharts />
            </div>

            <div className="RightBar">
              <div className="Head">Top Countries</div>
              <div className="NationInfo">
                <img className="Nation" src="/src/assets/india.png" alt="" />
                <div className="CounName">India</div>

                <div className="Profit">
                  <div className="Grow">$21,545.65</div>
                  <div className="Trend">
                    <Moving />
                  </div>
                </div>
              </div>
              <div className="NationInfo">
                <img className="Nation" src="/src/assets/usa.png" alt="" />
                <div className="CounName">United States</div>

                <div className="Profit">
                  <div className="Grow">$9,523.41</div>
                  <div className="Trend">
                    <TrendingDown style={{color:"red"}} />
                  </div>
                </div>
              </div>
              <div className="NationInfo">
                <img className="Nation" src="/src/assets/eng.png" alt="" />
                <div className="CounName">England</div>

                <div className="Profit">
                  <div className="Grow">$13,569.32</div>
                  <div className="Trend">
                  <TrendingDown style={{color:"red"}} />
                  </div>
                </div>
              </div>
              <div className="NationInfo">
                <img className="Nation" src="/src/assets/canada.png" alt="" />
                <div className="CounName">Canada</div>

                <div className="Profit">
                  <div className="Grow">$19,635.83</div>
                  <div className="Trend">
                    <Moving />
                  </div>
                </div>
              </div>
              <div className="NationInfo">
                <img className="Nation" src="/src/assets/aust.png" alt="" />
                <div className="CounName">Australia</div>

                <div className="Profit">
                  <div className="Grow">$20,125.42</div>
                  <div className="Trend">
                    <Moving />
                  </div>
                </div>
              </div>
              <div className="NationInfo">
                <img className="Nation" src="/src/assets/japan.png" alt="" />
                <div className="CounName">Japan</div>

                <div className="Profit">
                  <div className="Grow">$10,254.85</div>
                  <div className="Trend">
                  <TrendingDown style={{color:"red"}} />
                  </div>
                </div>
              </div>
              <div className="NationInfo">
                <img className="Nation" src="/src/assets/rus.png" alt="" />
                <div className="CounName">Russia</div>

                <div className="Profit">
                  <div className="Grow">$6,23.54</div>
                  <div className="Trend">
                  <TrendingDown style={{color:"red"}} />
                  </div>
                </div>
              </div>
              <div className="NationInfo">
                <img className="Nation" src="/src/assets/china.png" alt="" />
                <div className="CounName">China</div>

                <div className="Profit">
                  <div className="Grow">$11,205.24</div>
                  <div className="Trend">
                  <TrendingDown style={{color:"red"}} />
                  </div>
                </div>
              </div>
              <div className="NationInfo">
                <img className="Nation" src="/src/assets/germn.png" alt="" />
                <div className="CounName">Germany</div>

                <div className="Profit">
                  <div className="Grow">$18,752.39</div>
                  <div className="Trend">
                    <Moving />
                  </div>
                </div>
              </div>
              <div className="NationInfo">
                <img className="Nation" src="/src/assets/italy.png" alt="" />
                <div className="CounName">Italy</div>

                <div className="Profit">
                  <div className="Grow">$16,856.20</div>
                  <div className="Trend">
                    <Moving />
                  </div>
                </div>
              </div>
              <div className="NationInfo">
                <img className="Nation" src="/src/assets/spain.png" alt="" />
                <div className="CounName">Spain</div>

                <div className="Profit">
                  <div className="Grow">$18,625.30</div>
                  <div className="Trend">
                    <Moving />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
