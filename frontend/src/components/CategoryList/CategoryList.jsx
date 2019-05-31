/* Core 라이브러리 */
import React, { Component } from "react";

/* FontAwesomeIcon */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons/faArrowCircleRight";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons/faCaretUp";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown";
// import { faEquals } from "@fortawesome/free-solid-svg-icons/faEquals";

/* CSS */
import "./CategoryList.css";

class CategoryList extends Component {
  state = {};

  render() {
    return (
      <div>
        <div className="categoryList_header">
          <h2>Category</h2>
          <div> Update : 2019-05-31 19:00 </div>
        </div>
        <div id="categoryList_wrapper">
          <div className="categoryList_list">
            <h2>먹방</h2>
            <hr />

            <div className="categoryList_listItem">
              <div>1. 치킨 </div>
              <div className="listItem_rank">
                <FontAwesomeIcon
                  className="listItem_icon up"
                  icon={faCaretUp}
                />{" "}
                239
              </div>
            </div>

            <div className="categoryList_listItem">
              <div>2. 피자 </div>
              <div className="listItem_rank">
                <FontAwesomeIcon
                  className="listItem_icon down"
                  icon={faCaretDown}
                />{" "}
                150
              </div>
            </div>

            <div className="categoryList_listItem">
              <div>3. 불고기 </div>
              <div className="listItem_rank">
                <FontAwesomeIcon
                  className="listItem_icon down"
                  icon={faCaretDown}
                />{" "}
                110
              </div>
            </div>

            <div className="categoryList_listItem">
              <div>4. 삼겹살 </div>
              <div className="listItem_rank">
                <FontAwesomeIcon
                  className="listItem_icon up"
                  icon={faCaretUp}
                />{" "}
                100
              </div>
            </div>

            <div className="categoryList_listItem">
              <div>5. 미나리 </div>
              <div className="listItem_rank">
                <FontAwesomeIcon
                  className="listItem_icon up"
                  icon={faCaretUp}
                />{" "}
                180
              </div>
            </div>

            <div className="categoryList_look">
              더보기
              <FontAwesomeIcon icon={faArrowCircleRight} />
            </div>
          </div>

          <div className="categoryList_list">
            <h2>여행</h2>
            <hr />
            <div className="categoryList_listItem">
              <div>1. 대한민국 </div>
              <div className="listItem_rank">
                <FontAwesomeIcon
                  className="listItem_icon up"
                  icon={faCaretUp}
                />{" "}
                180
              </div>
            </div>

            <div className="categoryList_listItem">
              <div>2. 일본 </div>
              <div className="listItem_rank">
                <FontAwesomeIcon
                  className="listItem_icon down"
                  icon={faCaretDown}
                />{" "}
                123
              </div>
            </div>

            <div className="categoryList_listItem">
              <div>3. 동남아 </div>
              <div className="listItem_rank">
                <FontAwesomeIcon
                  className="listItem_icon down"
                  icon={faCaretDown}
                />{" "}
                119
              </div>
            </div>

            <div className="categoryList_listItem">
              <div>4. 유럽 </div>
              <div className="listItem_rank">
                <FontAwesomeIcon
                  className="listItem_icon up"
                  icon={faCaretUp}
                />{" "}
                200
              </div>
            </div>

            <div className="categoryList_listItem">
              <div>5. 러시아 </div>
              <div className="listItem_rank">
                <FontAwesomeIcon
                  className="listItem_icon up"
                  icon={faCaretUp}
                />{" "}
                199
              </div>
            </div>
            <div className="categoryList_look">
              더보기
              <FontAwesomeIcon icon={faArrowCircleRight} />
            </div>
          </div>

          <div className="categoryList_list">
            <h2>게임</h2>
            <hr />
            <div className="categoryList_listItem">
              <div>1. 리그오브레전드 </div>
              <div className="listItem_rank">
                <FontAwesomeIcon
                  className="listItem_icon up"
                  icon={faCaretUp}
                />{" "}
                239
              </div>
            </div>

            <div className="categoryList_listItem">
              <div>2. 배틀그라운드 </div>
              <div className="listItem_rank">
                <FontAwesomeIcon
                  className="listItem_icon down"
                  icon={faCaretDown}
                />{" "}
                150
              </div>
            </div>

            <div className="categoryList_listItem">
              <div>3. 피파온라인4 </div>
              <div className="listItem_rank">
                <FontAwesomeIcon
                  className="listItem_icon down"
                  icon={faCaretDown}
                />{" "}
                110
              </div>
            </div>

            <div className="categoryList_listItem">
              <div>4. 로스트아크 </div>
              <div className="listItem_rank">
                <FontAwesomeIcon
                  className="listItem_icon up"
                  icon={faCaretUp}
                />{" "}
                100
              </div>
            </div>

            <div className="categoryList_listItem">
              <div>5. 메이플스토리 </div>
              <div className="listItem_rank">
                <FontAwesomeIcon
                  className="listItem_icon up"
                  icon={faCaretUp}
                />{" "}
                180
              </div>
            </div>
            <div className="categoryList_look">
              더보기
              <FontAwesomeIcon icon={faArrowCircleRight} />
            </div>
          </div>

          <div className="categoryList_list">
            <h2>뷰티</h2>
            <hr />

            <div className="categoryList_listItem">
              <div>1. 올리브영 </div>
              <div className="listItem_rank">
                <FontAwesomeIcon
                  className="listItem_icon up"
                  icon={faCaretUp}
                />{" "}
                239
              </div>
            </div>

            <div className="categoryList_listItem">
              <div>2. 미샤 </div>
              <div className="listItem_rank">
                <FontAwesomeIcon
                  className="listItem_icon down"
                  icon={faCaretDown}
                />{" "}
                150
              </div>
            </div>

            <div className="categoryList_listItem">
              <div>3. 이니스프리 </div>
              <div className="listItem_rank">
                <FontAwesomeIcon
                  className="listItem_icon down"
                  icon={faCaretDown}
                />{" "}
                110
              </div>
            </div>

            <div className="categoryList_listItem">
              <div>4. 더샘 </div>
              <div className="listItem_rank">
                <FontAwesomeIcon
                  className="listItem_icon up"
                  icon={faCaretUp}
                />{" "}
                100
              </div>
            </div>

            <div className="categoryList_listItem">
              <div>5. 더페이스샵 </div>
              <div className="listItem_rank">
                <FontAwesomeIcon
                  className="listItem_icon up"
                  icon={faCaretUp}
                />{" "}
                180
              </div>
            </div>
            <div className="categoryList_look">
              더보기
              <FontAwesomeIcon icon={faArrowCircleRight} />
            </div>
          </div>

          <div className="categoryList_list">
            <h2>음악</h2>
            <hr />
            <div className="categoryList_listItem">
              <div>1. 발라드 </div>
              <div className="listItem_rank">
                <FontAwesomeIcon
                  className="listItem_icon up"
                  icon={faCaretUp}
                />{" "}
                239
              </div>
            </div>

            <div className="categoryList_listItem">
              <div>2. 댄스 </div>
              <div className="listItem_rank">
                <FontAwesomeIcon
                  className="listItem_icon down"
                  icon={faCaretDown}
                />{" "}
                150
              </div>
            </div>

            <div className="categoryList_listItem">
              <div>3. POP </div>
              <div className="listItem_rank">
                <FontAwesomeIcon
                  className="listItem_icon down"
                  icon={faCaretDown}
                />{" "}
                110
              </div>
            </div>

            <div className="categoryList_listItem">
              <div>4. 인디밴드 </div>
              <div className="listItem_rank">
                <FontAwesomeIcon
                  className="listItem_icon up"
                  icon={faCaretUp}
                />{" "}
                100
              </div>
            </div>

            <div className="categoryList_listItem">
              <div>5. Rock </div>
              <div className="listItem_rank">
                <FontAwesomeIcon
                  className="listItem_icon up"
                  icon={faCaretUp}
                />{" "}
                180
              </div>
            </div>
            <div className="categoryList_look">
              더보기
              <FontAwesomeIcon icon={faArrowCircleRight} />
            </div>
          </div>

          <div className="categoryList_list">
            <h2>토크</h2>
            <hr />

            <div className="categoryList_listItem">
              <div>1. 직장인 </div>
              <div className="listItem_rank">
                <FontAwesomeIcon
                  className="listItem_icon up"
                  icon={faCaretUp}
                />{" "}
                239
              </div>
            </div>

            <div className="categoryList_listItem">
              <div>2. 대학생활 </div>
              <div className="listItem_rank">
                <FontAwesomeIcon
                  className="listItem_icon down"
                  icon={faCaretDown}
                />{" "}
                150
              </div>
            </div>

            <div className="categoryList_listItem">
              <div>3. 고딩생활 </div>
              <div className="listItem_rank">
                <FontAwesomeIcon
                  className="listItem_icon down"
                  icon={faCaretDown}
                />{" "}
                110
              </div>
            </div>

            <div className="categoryList_listItem">
              <div>4. 중딩생활 </div>
              <div className="listItem_rank">
                <FontAwesomeIcon
                  className="listItem_icon up"
                  icon={faCaretUp}
                />{" "}
                100
              </div>
            </div>

            <div className="categoryList_listItem">
              <div>5. 유년기 </div>
              <div className="listItem_rank">
                <FontAwesomeIcon
                  className="listItem_icon up"
                  icon={faCaretUp}
                />{" "}
                180
              </div>
            </div>
            <div className="categoryList_look">
              더보기
              <FontAwesomeIcon icon={faArrowCircleRight} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryList;
