import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '../lib/supabase'
import LoginForm from './LoginForm'
import { Mail, User, Calendar, MessageSquare, Eye, Trash2, RefreshCw, Filter, LogOut, Home } from 'lucide-react'

const AdminDashboard = () => {
  const [inquiries, setInquiries] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedInquiry, setSelectedInquiry] = useState(null)
  const [filter, setFilter] = useState('all') // all, new, read, replied
  const [user, setUser] = useState(null)
  const [authLoading, setAuthLoading] = useState(true)

  useEffect(() => {
    // Check authentication status
    checkAuth()
    
    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        setUser(session.user)
      } else if (event === 'SIGNED_OUT') {
        setUser(null)
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  useEffect(() => {
    if (user) {
      // Test connection first
      testConnection()
      fetchInquiries()
    }
  }, [user])

  const checkAuth = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession()
      setUser(session?.user || null)
    } catch (error) {
      console.error('Error checking auth:', error)
    } finally {
      setAuthLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut()
      setUser(null)
      // Redirect to homepage after logout
      window.location.href = '/'
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  const handleLoginSuccess = (userData) => {
    setUser(userData)
  }

  const testConnection = async () => {
    try {
      console.log('Testing Supabase connection...')
      console.log('Supabase URL:', supabase.supabaseUrl)
      console.log('Supabase Key (first 20 chars):', supabase.supabaseKey?.substring(0, 20) + '...')
      
      // Simple test query
      const { data, error } = await supabase
        .from('contact_inquiries')
        .select('count(*)')
        .limit(1)
      
      console.log('Connection test result:', { data, error })
      
      if (error) {
        console.error('Connection test failed:', error)
        if (error.message.includes('relation "contact_inquiries" does not exist')) {
          console.log('❌ Table does not exist - create it in Supabase dashboard')
        } else if (error.message.includes('Failed to fetch')) {
          console.log('❌ Network error - check URL and internet connection')
        } else {
          console.log('❌ Other error:', error.message)
        }
      } else {
        console.log('✅ Supabase connection successful!')
      }
    } catch (err) {
      console.error('❌ Connection test error:', err)
    }
  }

  const fetchInquiries = async () => {
    try {
      setLoading(true)
      console.log('Attempting to fetch inquiries from Supabase...')
      console.log('Current user:', user)
      
      const { data, error } = await supabase
        .from('contact_inquiries')
        .select('*')
        .order('created_at', { ascending: false })

      console.log('Supabase response:', { data, error })
      console.log('Data length:', data?.length || 0)
      console.log('Raw data:', data)

      if (error) {
        console.error('Supabase error:', error)
        console.error('Error details:', {
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code
        })
        throw error
      }
      
      setInquiries(data || [])
      console.log('Successfully loaded inquiries:', data?.length || 0)
    } catch (error) {
      console.error('Error fetching inquiries:', error)
      
      // More detailed error message
      let errorMessage = 'Error loading inquiries: '
      if (error.message.includes('relation "contact_inquiries" does not exist')) {
        errorMessage += 'Database table does not exist. Please create the contact_inquiries table in Supabase.'
      } else if (error.message.includes('Failed to fetch')) {
        errorMessage += 'Network error. Please check your internet connection and Supabase configuration.'
      } else {
        errorMessage += error.message
      }
      
      alert(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  const markAsRead = async (id) => {
    try {
      const { error } = await supabase
        .from('contact_inquiries')
        .update({ status: 'read' })
        .eq('id', id)

      if (error) throw error
      
      // Update local state
      setInquiries(prev => 
        prev.map(inquiry => 
          inquiry.id === id ? { ...inquiry, status: 'read' } : inquiry
        )
      )
    } catch (error) {
      console.error('Error updating status:', error)
    }
  }

  const markAsReplied = async (id) => {
    try {
      const { error } = await supabase
        .from('contact_inquiries')
        .update({ status: 'replied' })
        .eq('id', id)

      if (error) throw error
      
      // Update local state
      setInquiries(prev => 
        prev.map(inquiry => 
          inquiry.id === id ? { ...inquiry, status: 'replied' } : inquiry
        )
      )
    } catch (error) {
      console.error('Error updating status:', error)
    }
  }

  const deleteInquiry = async (id) => {
    if (!confirm('Are you sure you want to delete this inquiry?')) return

    try {
      const { error } = await supabase
        .from('contact_inquiries')
        .delete()
        .eq('id', id)

      if (error) throw error
      
      // Update local state
      setInquiries(prev => prev.filter(inquiry => inquiry.id !== id))
      setSelectedInquiry(null)
    } catch (error) {
      console.error('Error deleting inquiry:', error)
    }
  }

  const filteredInquiries = inquiries.filter(inquiry => {
    if (filter === 'all') return true
    return inquiry.status === filter
  })

  const getStatusColor = (status) => {
    switch (status) {
      case 'new': return 'bg-red-100 text-red-800'
      case 'read': return 'bg-yellow-100 text-yellow-800'
      case 'replied': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString()
  }

  // Show loading while checking authentication
  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-primary-500" />
          <p className="text-gray-600">Checking authentication...</p>
        </div>
      </div>
    )
  }

  // Show login form if not authenticated
  if (!user) {
    return <LoginForm onLoginSuccess={handleLoginSuccess} />
  }

  // Show loading while fetching inquiries
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-primary-500" />
          <p className="text-gray-600">Loading inquiries...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Contact Inquiries Dashboard</h1>
              <p className="text-gray-600 mt-1">Manage and respond to contact form submissions</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <User className="w-4 h-4" />
                <span>{user?.email}</span>
              </div>
              <button
                onClick={() => window.location.href = '/'}
                className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                title="Back to Homepage"
              >
                <Home className="w-4 h-4" />
                Home
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-3 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                title="Logout"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
              <button
                onClick={fetchInquiries}
                className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                Refresh
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <Mail className="w-8 h-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Inquiries</p>
                <p className="text-2xl font-bold text-gray-900">{inquiries.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">New</p>
                <p className="text-2xl font-bold text-gray-900">
                  {inquiries.filter(i => i.status === 'new').length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Read</p>
                <p className="text-2xl font-bold text-gray-900">
                  {inquiries.filter(i => i.status === 'read').length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Replied</p>
                <p className="text-2xl font-bold text-gray-900">
                  {inquiries.filter(i => i.status === 'replied').length}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Inquiries List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">Inquiries</h2>
                  <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  >
                    <option value="all">All</option>
                    <option value="new">New</option>
                    <option value="read">Read</option>
                    <option value="replied">Replied</option>
                  </select>
                </div>
              </div>
              <div className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
                {filteredInquiries.length === 0 ? (
                  <div className="p-6 text-center text-gray-500">
                    No inquiries found
                  </div>
                ) : (
                  filteredInquiries.map((inquiry) => (
                    <motion.div
                      key={inquiry.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      onClick={() => {
                        setSelectedInquiry(inquiry)
                        if (inquiry.status === 'new') {
                          markAsRead(inquiry.id)
                        }
                      }}
                      className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                        selectedInquiry?.id === inquiry.id ? 'bg-primary-50 border-r-4 border-primary-500' : ''
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <User className="w-4 h-4 text-gray-400" />
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {inquiry.name}
                            </p>
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(inquiry.status)}`}>
                              {inquiry.status}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 truncate">{inquiry.email}</p>
                          <p className="text-sm font-medium text-gray-900 truncate">{inquiry.subject}</p>
                          <div className="flex items-center gap-4 mt-1">
                            <div className="flex items-center gap-1 text-xs text-gray-500">
                              <Calendar className="w-3 h-3" />
                              {formatDate(inquiry.created_at)}
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            deleteInquiry(inquiry.id)
                          }}
                          className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Inquiry Details */}
          <div className="lg:col-span-1">
            {selectedInquiry ? (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Inquiry Details</h3>
                  <div className="flex gap-2">
                    <button
                      onClick={() => markAsRead(selectedInquiry.id)}
                      className="p-2 text-gray-400 hover:text-blue-500 transition-colors"
                      title="Mark as Read"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => markAsReplied(selectedInquiry.id)}
                      className="p-2 text-gray-400 hover:text-green-500 transition-colors"
                      title="Mark as Replied"
                    >
                      <Mail className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <p className="text-sm text-gray-900">{selectedInquiry.name}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <a
                      href={`mailto:${selectedInquiry.email}`}
                      className="text-sm text-primary-600 hover:text-primary-700"
                    >
                      {selectedInquiry.email}
                    </a>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <p className="text-sm text-gray-900">{selectedInquiry.subject}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-sm text-gray-900 whitespace-pre-wrap">
                        {selectedInquiry.message}
                      </p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Received</label>
                    <p className="text-sm text-gray-900">{formatDate(selectedInquiry.created_at)}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(selectedInquiry.status)}`}>
                      {selectedInquiry.status}
                    </span>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <a
                      href={`mailto:${selectedInquiry.email}?subject=Re: ${selectedInquiry.subject}`}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      Reply via Email
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="text-center text-gray-500">
                  <MessageSquare className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p>Select an inquiry to view details</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
