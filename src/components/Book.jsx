import React, { useState } from 'react'
import frontPageEdgeShading from '../assets/images/front_page_edge_shading.webp'
import backPageEdgeShading from '../assets/images/back_page_edge_shading.webp'
import flipBookEdgeShading from '../assets/images/flip_book_edge_shading.webp'

function Book() {
  const [coverChecked, setCoverChecked] = useState(false);
  const [page1Checked, setPage1Checked] = useState(false);
  const [page2Checked, setPage2Checked] = useState(false);
  const [page3Checked, setPage3Checked] = useState(false);
  const [page4Checked, setPage4Checked] = useState(false);
  const [page5Checked, setPage5Checked] = useState(false);

  return (
    <div id="flip_book" className={coverChecked ? 'cover-flipped' : ''}>
      {/* Front Cover */}
      <div 
        className={`front_cover ${coverChecked ? 'flipped' : ''}`}
        onClick={() => setCoverChecked(!coverChecked)}
        style={{ backgroundImage: `url(${flipBookEdgeShading})` }}
      >
        <div id="cover"></div>
      </div>

      {/* Page 1 */}
      <div 
        id="page1" 
        className={`page ${page1Checked ? 'flipped' : ''}`}
        style={{ zIndex: page1Checked ? 3 : 8 }}
      >
        <div className="front_page">
          <div 
            className="page-label"
            onClick={() => setPage1Checked(!page1Checked)}
          ></div>
          <img className="edge_shading" src={frontPageEdgeShading} alt="Front page edge shading" />
          <div className="front_content"></div>
        </div>
        <div className="back_page">
          <div 
            className="page-label"
            onClick={() => setPage1Checked(!page1Checked)}
          ></div>
          <img className="edge_shading" src={backPageEdgeShading} alt="Back page edge shading" />
          <div className="back_content"></div>
        </div>
      </div>

      {/* Page 2 */}
      <div 
        id="page2" 
        className={`page ${page2Checked ? 'flipped' : ''}`}
        style={{ zIndex: page2Checked ? 4 : 5 }}
      >
        <div className="front_page">
          <div 
            className="page-label"
            onClick={() => setPage2Checked(!page2Checked)}
          ></div>
          <img className="edge_shading" src={frontPageEdgeShading} alt="Front page edge shading" />
          <div className="front_content"></div>
        </div>
        <div className="back_page">
          <div 
            className="page-label"
            onClick={() => setPage2Checked(!page2Checked)}
          ></div>
          <img className="edge_shading" src={backPageEdgeShading} alt="Back page edge shading" />
          <div className="back_content"></div>
        </div>
      </div>

      {/* Page 3 */}
      <div 
        id="page3" 
        className={`page ${page3Checked ? 'flipped' : ''}`}
        style={{ zIndex: page3Checked ? 5 : 4 }}
      >
        <div className="front_page">
          <div 
            className="page-label"
            onClick={() => setPage3Checked(!page3Checked)}
          ></div>
          <img className="edge_shading" src={frontPageEdgeShading} alt="Front page edge shading" />
          <div className="front_content"></div>
        </div>
        <div className="back_page">
          <div 
            className="page-label"
            onClick={() => setPage3Checked(!page3Checked)}
          ></div>
          <img className="edge_shading" src={backPageEdgeShading} alt="Back page edge shading" />
          <div className="back_content"></div>
        </div>
      </div>

      {/* Page 4 */}
      <div 
        id="page4" 
        className={`page ${page4Checked ? 'flipped' : ''}`}
        style={{ zIndex: page4Checked ? 6 : 3 }}
      >
        <div className="front_page">
          <div 
            className="page-label"
            onClick={() => setPage4Checked(!page4Checked)}
          ></div>
          <img className="edge_shading" src={frontPageEdgeShading} alt="Front page edge shading" />
          <div className="front_content"></div>
        </div>
        <div className="back_page">
          <div 
            className="page-label"
            onClick={() => setPage4Checked(!page4Checked)}
          ></div>
          <img className="edge_shading" src={backPageEdgeShading} alt="Back page edge shading" />
          <div className="back_content"></div>
        </div>
      </div>

      {/* Page 5 */}
      <div 
        id="page5" 
        className={`page ${page5Checked ? 'flipped' : ''}`}
        style={{ zIndex: page5Checked ? 9 : 2 }}
      >
        <div className="front_page">
          <div 
            className="page-label"
            onClick={() => setPage5Checked(!page5Checked)}
          ></div>
          <img className="edge_shading" src={frontPageEdgeShading} alt="Front page edge shading" />
          <div className="front_content"></div>
        </div>
        <div className="back_page">
          <div 
            className="page-label"
            onClick={() => setPage5Checked(!page5Checked)}
          ></div>
          <img className="edge_shading" src={backPageEdgeShading} alt="Back page edge shading" />
          <div className="back_content"></div>
        </div>
      </div>

      {/* Back Cover */}
      <div 
        className="back_cover"
        style={{ backgroundImage: `url(${flipBookEdgeShading})` }}
      ></div>
    </div>
  );
}

export default Book
