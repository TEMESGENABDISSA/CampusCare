# CampusCare

## Project Description

CampusCare is a student clinic appointment booking application designed for university students to easily find doctors and book appointments with campus health services. The application provides a simple, intuitive interface for browsing available doctors, filtering by department, viewing doctor details, and scheduling appointments.

## Features

- **Doctor Browsing**: View all available campus doctors with their specialties and experience
- **Department Filtering**: Filter doctors by Cardiology, Dentistry, Pediatrics, or General Medicine
- **Doctor Details**: View detailed information about each doctor including available appointment times
- **Appointment Booking**: Complete booking form with validation for student information
- **Form Validation**: Client-side validation for all required fields including email format and phone number
- **Confirmation**: Clear confirmation screen displaying booked appointment details
- **Appointment History**: View all previously booked appointments with status
- **Authentication/Session**: Simple demo authentication with session persistence using localStorage
- **Loading/Error/Empty States**: Proper UI states for loading data, errors, and empty results

## Technologies

- **React 19.2.8** - UI library
- **Vite 8.3.0** - Build tool and dev server
- **React Router DOM 7.18.4** - Client-side routing
- **JavaScript** - Programming language
- **CSS** - Styling

## Project Structure

The project uses a feature-based folder structure for better organization:

```
src/
├── api/              # Data layer (doctor data)
├── hooks/            # Custom React hooks
├── ui/               # Shared UI components (Navbar, Footer, ErrorBoundary)
├── doctors/          # Doctor browsing feature
│   ├── Doctors.jsx
│   ├── DoctorDetail.jsx
│   ├── DoctorCard.jsx
│   ├── DoctorList.jsx
│   └── DepartmentFilter.jsx
├── booking/          # Appointment booking feature
│   ├── Booking.jsx
│   └── Confirmation.jsx
├── appointments/     # Appointment management
│   ├── AppointmentHistory.jsx
│   └── AppointmentContext.jsx
├── auth/             # Authentication
│   ├── AuthContext.jsx
│   ├── SignIn.jsx
│   └── RequireAuth.jsx
├── Layout.jsx        # Application layout wrapper
├── Home.jsx          # Landing page
├── App.jsx           # Main routing configuration
└── main.jsx          # Application entry point
```

## React Concepts Demonstrated

- **Components**: Functional components for UI elements (Home, Doctors, Booking, etc.)
- **Props**: Passing data between parent and child components (DoctorCard receives doctor object)
- **State**: Using useState for component-level state (form fields, filter selection, loading states)
- **useEffect**: Handling side effects (simulating API loading, loading data from localStorage)
- **Custom Hooks**: useAppointments() and useAuth() for accessing Context
- **Context**: Shared state management for appointments and authentication across the application
- **Dynamic Routes**: Using useParams() for dynamic doctor IDs (/doctors/:id)
- **Form Validation**: Client-side validation with error messages and visual feedback
- **Error Boundary**: Class component to catch rendering errors and display fallback UI
- **Lazy Loading**: Using React.lazy() and Suspense for code splitting (AppointmentHistory)

## User Journey

1. **Home**: User lands on the landing page and clicks "Find a Doctor"
2. **Doctors**: User browses all available doctors and can filter by department
3. **Filter**: User selects a department (e.g., Cardiology) to see relevant doctors
4. **Doctor Details**: User clicks "View Profile" to see detailed information about a specific doctor
5. **Booking**: User clicks "Book Appointment", is redirected to sign in if not authenticated, then fills out the booking form
6. **Confirmation**: After successful booking, user sees confirmation screen with appointment details
7. **Appointment History**: User can navigate to "Appointments" to view all booked appointments

## Installation

1. Clone the repository:
```bash
git clone https://github.com/TEMESGENABDISSA/CampusCare.git
cd campuscare
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173/`

## Development Process

The project was developed in small vertical slices with Git commits to track progress:

1. Project setup and initial Vite configuration
2. Feature-based folder structure creation
3. Home page implementation
4. Doctor data source creation
5. Doctor card component
6. Doctor list component
7. Doctors page with department filtering
8. Loading, error, and empty states
9. Doctor details page with dynamic routing
10. Appointment booking form with validation
11. Appointment context for shared state
12. Confirmation page
13. Appointment history page
14. Authentication context and sign-in page
15. Route protection with RequireAuth
16. Lazy loading for AppointmentHistory
17. Error boundary implementation
18. localStorage persistence for appointments
19. UI/UX improvements for professional appearance

Each commit represents a complete, working feature that can be tested independently.

## Testing

Important edge cases tested:

- **Slow doctor loading**: Simulated 1-second loading delay with loading state
- **Doctor request failure**: Error state displays when data cannot be loaded
- **No doctors**: Empty state when filtering returns no results
- **Invalid doctor ID**: "Doctor Not Found" message for non-existent doctors
- **Empty booking fields**: Validation prevents submission with empty required fields
- **Invalid email**: Email format validation using regex pattern
- **Missing appointment time**: Time field validation as required
- **Signed-out user attempting protected booking**: Redirect to sign-in page
- **Appointment history with no appointments**: Empty state message displayed
- **Appointment history with appointments**: All appointments displayed with details
- **Page refresh**: Appointments and authentication persist via localStorage

## Future Improvements

Potential enhancements for a production application:

- **Backend/Database**: Connect to a real backend API (Node.js, Express, MongoDB/PostgreSQL) for persistent data storage
- **Real Authentication**: Implement secure authentication with JWT tokens, password hashing, and session management
- **Appointment Cancellation**: Allow users to cancel booked appointments
- **Double Booking Prevention**: Prevent users from booking the same time slot with the same doctor
- **Automated Tests**: Add unit tests with React Testing Library and integration tests
- **Email Notifications**: Send confirmation emails when appointments are booked
- **Calendar Integration**: Add appointments to user's calendar (Google Calendar, Outlook)
- **Doctor Availability Management**: Allow doctors to manage their own availability
- **Review System**: Allow students to rate and review doctors after appointments
- **Reminders**: Send SMS or email reminders before scheduled appointments
