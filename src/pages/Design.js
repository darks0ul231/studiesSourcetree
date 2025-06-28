import { Outlet, Link } from "react-router-dom";

const Design = (props) => {
    return (
        <>
         <div className="layout">
    {/* <!-- Header --> */}
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <span className="icon">◨</span>
          <h1>My Dashboard</h1>
        </div>
        <div className="header-actions">
          <a href="login"className="btn btn-text login">Sign In</a>
          <button className="btn btn-primary">Register</button>
        </div>
      </div>
    </header>
    {/* <!-- Main content with sidebars --> */}
    <div className="main-container">
      {/* <!-- Left Sidebar --> */}
      <aside className="sidebar">
        <h2>Menu</h2>
        <nav>
          <ul className="nav-list">
            <li><a href="/"><span className="icon">⌂</span> Home</a></li>
            <li><a href="about_us"><span className="icon">ℹ</span> About Us</a></li>
            <li><a href="profile"><span className="icon">👤</span> Profile</a></li>
            <li><a href="login"><span className="icon">➜</span> Login</a></li>
          </ul>
        </nav>
      </aside>
      {/* <!-- Main Content --> */}
      <main className="content">
        <h2>Welcome to Dashboard</h2>
        <div className="card-grid">
          <div className="card">
            <h3>Quick Stats</h3>
            <p className="card-text">View your activity and progress at a glance.</p>
            <div className="stats">
              <div className="stat">
                <div className="stat-value">24</div>
                <div className="stat-label">Tasks</div>
              </div>
              <div className="stat">
                <div className="stat-value">8</div>
                <div className="stat-label">Completed</div>
              </div>
              <div className="stat">
                <div className="stat-value">16</div>
                <div className="stat-label">Pending</div>
              </div>
            </div>
          </div>
          <div className="card">
            <h3>Recent Activity</h3>
            <ul className="activity-list">
              <li>
                <p>Updated profile information</p>
                <p className="time">2 hours ago</p>
              </li>
              <li>
                <p>Completed task "Design Review"</p>
                <p className="time">Yesterday</p>
              </li>
              <li>
                <p>Added new project "Dashboard"</p>
                <p className="time">3 days ago</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="card">
          <h3>Project Overview</h3>
          <p className="card-text">
            This dashboard provides a comprehensive view of your projects, tasks,
            and activities. Use the navigation menu to access different sections
            of the application.
          </p>
          <button className="btn btn-action">View All Projects</button>
        </div>
      </main>
      {/* <!-- Right Sidebar --> */}
      <aside className="right-sidebar">
        <h2>Updates</h2>
        <div className="widget">
          <div className="widget-header">
            <span className="icon">🔔</span>
            <h3>Notifications</h3>
          </div>
          <ul className="notification-list">
            <li>
              <p>New comment on your post</p>
              <p className="time">10 min ago</p>
            </li>
            <li>
              <p>Meeting reminder: Team call</p>
              <p className="time">1 hour ago</p>
            </li>
            <li>
              <p>Your report is ready</p>
              <p className="time">2 hours ago</p>
            </li>
          </ul>
        </div>
        <div className="widget">
          <div className="widget-header">
            <span className="icon">📅</span>
            <h3>Upcoming Events</h3>
          </div>
          <ul className="event-list">
            <li>
              <p>Weekly Standup</p>
              <p className="time">Tomorrow, 10:00 AM</p>
            </li>
            <li>
              <p>Product Review</p>
              <p className="time">Friday, 2:00 PM</p>
            </li>
          </ul>
        </div>
        <div className="widget">
          <div className="widget-header">
            <span className="icon">👥</span>
            <h3>Team Members</h3>
          </div>
          <div className="team-members">
            <div className="avatar">JD</div>
            <div className="avatar">AM</div>
            <div className="avatar">SK</div>
            <div className="avatar">RB</div>
            <div className="avatar more">+3</div>
          </div>
        </div>
      </aside>
    </div>
    {/* <!-- Footer --> */}
    <footer className="footer">
      <div className="container footer-container">
        <div className="copyright">
          <p>&copy; 2023 My Dashboard. All rights reserved.</p>
        </div>
        <div classNameName="footer-links">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Contact Us</a>
        </div>
        <div classNameName="social-links">
          <a href="#" className="social-icon">𝕏</a>
          <a href="#" className="social-icon">♆</a>
          <a href="#" className="social-icon">📷</a>
        </div>
      </div>
    </footer>
  </div>
{/* <div classNameName="page">
  <div classNameName="header">Header</div>
  <div classNameName="menu">
    Menu
    <ol>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="about_us">About Us</a>
      </li>
      <li>
        <a href="profile">profile</a>
      </li>
      <li>
        <a href="login">Login</a>
      </li>
    </ol>
  </div>
  <div classNameName="main">
    {props.children}
  </div>
  <div classNameName="right">Right</div>
  <div classNameName="footer">Footer</div>
</div> */}

      </>
      
    )
  };

  export default Design;