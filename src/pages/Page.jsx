import React from 'react'
import backgroundImage from '../assets/Background.jpg'
import tech from '../assets/tech.png'
import { useLocation } from 'react-router-dom'

const Page = () => {
  const location = useLocation()
  const societyFromForm = location.state?.society
  const eventsFromForm = location.state?.events

  const defaultEvents = [
    {
      id: 1,
      title: 'Annual Conference',
      date: 'Sat, 24 Aug  10:00 AM',
      duration: 'All day',
      location: 'Main auditorium',
      attendees: '96 registrations',
      committees: '3 committees',
      description: 'Join us for a day of knowledge sharing and networking.',
      tag: 'Flagship'
    },
    {
      id: 2,
      title: 'Executive Board',
      date: 'Thu, 05 Sep  5:30 PM',
      duration: '2 hours',
      location: 'Room B204',
      attendees: '48 members',
      committees: '5 discussions',
      description: 'Quarterly leadership review on collaboration and innovation.',
      tag: 'Leadership'
    },
    {
      id: 3,
      title: 'Society Overview',
      date: 'Mon, 16 Sep  4:00 PM',
      duration: '90 minutes',
      location: 'Innovation lab',
      attendees: '210 sign-ups',
      committees: '7 panel events',
      description: 'Kickoff session for workshops and learning opportunities this semester.',
      tag: 'Open to all'
    },
    {
      id: 4,
      title: 'Executive Meetup',
      date: 'Fri, 27 Sep  6:00 PM',
      duration: '3 hours',
      location: 'Board room',
      attendees: '18 board',
      committees: '1 keynote',
      description: 'Strategic leadership meetup to align on our mission and goals.',
      tag: 'Invite only'
    }
  ]

  const events =
    eventsFromForm && eventsFromForm.length > 0
      ? eventsFromForm.map((event, index) => ({
          id: event.id || index + 1,
          title: event.name || `Event ${index + 1}`,
          date: '',
          duration: '',
          location: '',
          attendees: '',
          committees: '',
          description: event.description || '',
          tag: ''
        }))
      : defaultEvents

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center py-8 px-4">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col">
        <div className="relative h-48">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-90"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="relative z-10 h-full flex items-center px-6 sm:px-8 gap-4 sm:gap-6 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent">
            <img
              src={tech}
              alt="Society cover"
              className="hidden sm:block w-32 h-32 sm:w-40 sm:h-40 rounded-2xl object-cover border border-white/40 shadow-lg"
            />
            <div className="text-white">
              <p className="text-[11px] uppercase tracking-[0.2em] mb-1 opacity-80">Society overview</p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-1">
                {societyFromForm?.name || 'Alpha Society'}
              </h1>
              <p className="text-xs sm:text-sm md:text-base max-w-xl text-slate-100/90">
                {societyFromForm?.desc || (
                  <>
                    A community of innovators and learners. Join us for workshops, talks and networking
                    opportunities throughout the year.
                  </>
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col md:flex-row">
          <aside className="w-full md:w-72 border-t md:border-t-0 md:border-r border-slate-100 bg-slate-50/60 p-5 sm:p-6 space-y-8">
            <div>
              <p className="text-[11px] font-medium text-slate-500 mb-3 tracking-wide">Navigation</p>
              <div className="space-y-2">
                <button className="w-full rounded-xl bg-slate-900 text-white text-xs sm:text-sm py-2.5 px-3 text-left">
                  Overview
                </button>
                <button className="w-full rounded-xl border border-slate-200 bg-white text-xs sm:text-sm text-slate-700 py-2.5 px-3 text-left">
                  Upcoming events
                </button>
                <button className="w-full rounded-xl border border-slate-200 bg-white text-xs sm:text-sm text-slate-700 py-2.5 px-3 text-left">
                  Members
                </button>
                <button className="w-full rounded-xl border border-slate-200 bg-white text-xs sm:text-sm text-slate-700 py-2.5 px-3 text-left">
                  Resources
                </button>
                <button className="w-full rounded-xl border border-slate-200 bg-white text-xs sm:text-sm text-slate-700 py-2.5 px-3 text-left">
                  Settings
                </button>
              </div>
            </div>

            <div>
              <p className="text-[11px] font-medium text-slate-500 mb-3 tracking-wide">Recent highlights</p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span>New mentorship program launched for first-year members.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500" />
                  <span>Collaboration announced with the Innovation Lab.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500" />
                  <span>Annual conference registrations crossed 90% capacity.</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[11px] font-medium text-slate-500 mb-3 tracking-wide">Member engagement</p>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-[11px] text-slate-500 mb-1">
                    <span>Active members</span>
                    <span>124</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-slate-200 overflow-hidden">
                    <div className="h-full w-3/4 bg-emerald-500" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[11px] text-slate-500 mb-1">
                    <span>Event attendance</span>
                    <span>87%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-slate-200 overflow-hidden">
                    <div className="h-full w-4/5 bg-sky-500" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[11px] text-slate-500 mb-1">
                    <span>New members</span>
                    <span>32</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-slate-200 overflow-hidden">
                    <div className="h-full w-1/2 bg-amber-500" />
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <main className="flex-1 p-5 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Upcoming events</h2>
              <button className="inline-flex items-center gap-2 self-start rounded-full border border-slate-200 bg-white px-4 py-2 text-[11px] sm:text-xs md:text-sm text-slate-700 shadow-sm">
                <span className="text-slate-500">Filter by</span>
                <span className="font-medium">All events</span>
                <span className="text-xs"> </span>
              </button>
            </div>

            <div className="space-y-4">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="rounded-2xl border border-slate-100 bg-slate-50/60 hover:bg-slate-50 transition-colors shadow-sm p-5 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-6"
                >
                  <div className="flex gap-4 sm:gap-5 flex-1">
                    <div className="hidden sm:block w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-slate-200 flex-shrink-0">
                      <img
                        src={tech}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-2 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-slate-900">
                          {event.title}
                        </h3>
                        {event.tag && (
                          <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-medium text-emerald-700">
                            {event.tag}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] sm:text-xs md:text-sm text-slate-600">
                        <span>{event.date}</span>
                        <span> {event.duration}</span>
                        <span> {event.location}</span>
                      </div>
                      <p className="text-[11px] sm:text-xs md:text-sm text-slate-600">
                        {event.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex sm:flex-col justify-between items-start sm:items-end gap-3 text-[11px] sm:text-xs md:text-sm text-slate-600">
                    <div className="space-y-1 sm:text-right">
                      <p>{event.attendees}</p>
                      <p>{event.committees}</p>
                    </div>
                    <button className="rounded-full bg-slate-900 text-white px-3 py-1.5 text-[11px] sm:text-xs md:text-sm">
                      View details
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-center">
              <button className="rounded-full border border-slate-300 bg-white px-5 py-2 text-[11px] sm:text-xs md:text-sm text-slate-700 shadow-sm">
                View more events
              </button>
            </div>

            {societyFromForm && (
              <div className="mt-10 rounded-2xl border border-slate-100 bg-slate-50/60 p-5 sm:p-6 space-y-2">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-slate-900">
                  Society details
                </h3>
                {societyFromForm.proff && (
                  <p className="text-[11px] sm:text-xs md:text-sm text-slate-600">
                    <span className="font-medium">Professors: </span>
                    {societyFromForm.proff}
                  </p>
                )}
                {societyFromForm.exbo && (
                  <p className="text-[11px] sm:text-xs md:text-sm text-slate-600">
                    <span className="font-medium">Executive members: </span>
                    {societyFromForm.exbo}
                  </p>
                )}
              </div>
            )}

            <footer className="mt-10 border-t border-slate-100 pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-[11px] sm:text-xs md:text-sm text-slate-500">
              <div className="space-y-1">
                <p className="font-medium text-slate-700">{societyFromForm?.name || 'Society XYZ Society'}</p>
                <p>Established in 2020</p>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-slate-700">About</p>
                <p>Mission</p>
                <p>Events</p>
                <p>Resources</p>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-slate-700">Community</p>
                <p>Join as a member</p>
                <p>Become a mentor</p>
                <p>Volunteer</p>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-slate-700">Connect with us</p>
                <p>Website</p>
                <p>Facebook Instagram LinkedIn</p>
                <p>Email newsletter</p>
              </div>
            </footer>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Page
