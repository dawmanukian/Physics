import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
const formulas = [
  'F = ma',
  'a = F / m',
  'G = 6.674 × 10^-11 N(m/kg)^2',
  'E = mc²',
  'P = F / A',
  'V = IR',
  'ρ = m / V',
  'W = Fd',
  'KE = ½mv²',
  'PE = mgh',
  'P = VI',
  'Q = mcΔT',
  'Fg = G * (m₁ * m₂) / r²',
  'Fg = mg',
  'a = F / m',
  'ΔU = Q - W',
  'PV = nRT',
  'n = N / Nₐ',
  'pV = NkT',
  'ΔS ≥ 0',
  'F = k * (q₁ * q₂) / r²',
  'ε = -dΦ/dt',
  'V = kQ / r',
  'n₁sinθ₁ = n₂sinθ₂',
  '1/f = 1/v - 1/u',
  'magnification = -v/u',
  'λ = h / p',
  'Δx * Δp ≥ ħ/2',
  'E = hf',
  'E = E₀ + KE + PE',
  'E = Δmc²',
  'N(t) = N₀ * (½)^(t / t₁/₂)',
  'v = fλ',
  'f\' = f(v + vo) / (v + vs)',
  'n = c / v',
  'τ = Iα',
  'Fb = ρVg',
  'Q = mc',
  'Q = mL',
  'q = ne',
  'ΦE = q / ε₀',
  'p = mv',
  'Δx * Δp ≥ ħ/2',
  'ĤΨ = EΨ',
  'λ = h / p',
  'Φ = B * A * cos(θ)',
  'Φ = μ₀NI',
  'Φ = BAcos(θ)',
  'ΔΦ = -NBAΔcos(θ)',
  'ΔE = Q - W',
  'Δx * Δp ≥ ħ/2',
  'γ = 1 / √(1 - v²/c²)',
  'n₁ / sinθ₁ = n₂ / sinθ₂',
  'α = ΔL / L₀ΔT',
  'f = 1 / T',
  'v = fλ',
  'p = h / λ',
  'E = hf',
  'ω = 2πf',
  'F = k * (|q₁q₂|) / r²',
  'E = k * |q| / r²',
  'PE = k * (q₁q₂) / r',
  'v = √(GM / r)',
  'F = q(E + v × B)',
  'B = μ₀I / (2πr)',
  'F = ILBsinθ',
  'μ = μ₀μᵣ',
  'R = ρL / A',
  'ρ = R * (1 + αΔT)',
  'pVγ = constant',
  'C = q / ΔT',
  'Q = mL',
  'v₂ - v₁ = gt',
  's = ut + ½gt²',
  'v² = u² + 2as',
  's = (u + v)t / 2',
  'F = -kx',
  'f = -kx',
  'a = -ω²x',
  'I = ΔQ / Δt',
  'V = IR',
  'P = IV',
  'R = V / I',
  'P = V² / R',
  'P = I²R',
  'V = V₀e^(-t/τ)',
  'q = CV',
  'V = kQ / r',
  'C = ε₀A / d',
  'C = Q / V',
  'U = ½CV²',
  'Q = Q₀e^(-t/RC)',
  'Q = Qₑ(1 - e^(-t/RC))',
  'λ = c / f',
  'n = c / v',
  'n₁sinθ₁ = n₂sinθ₂',
  'Δx * Δp ≥ ħ/2',
  'E = mc²',
  'γ = 1 / √(1 - v²/c²)',
  'E = mc² / √(1 - v²/c²)',
  'E = hf',
  'p = h / λ',
  'λ = h / p',
  'E = Δmc²',
  'N(t) = N₀ * (½)^(t / t₁/₂)',
  'n = c / v',
  'v = fλ',
  'f\' = f(v + vo) / (v + vs)',
  'Q = mc',
  'Q = mL',
  'q = ne',
  'Q = mcΔT',
  'Q = mL',
  'Fg = G * (m₁ * m₂) / r²',
  'Fg = mg',
  'W = Fd',
  'F = ma',
  'a = F / m',
  'p = mv',
  'p = FΔt',
  'F = k * (q₁ * q₂) / r²',
  'V = IR',
  'I = Q / Δt',
  'Q = ne',
  'Q = CV',
  'W = QV',
  'V = kQ / r',
  'C = ε₀A / d',
  'C = Q / V',
  'U = ½CV²',
  'Q = Q₀e^(-t/RC)',
  'Q = Qₑ(1 - e^(-t/RC))',
  'λ = c / f',
  'v = fλ',
  'f\' = f(v + vo) / (v + vs)',
  'n = c / v',
  'α = ΔL / L₀ΔT',
  'f = 1 / T',
  'ω = 2πf',
  'v = fλ',
  'p = h / λ',
  'F = -kx',
  'f = -kx',
  'a = -ω²x',
  'τ = Iα',
  'Fb = ρVg',
  'ρ = m / V',
  'P = F / A',
  'V = IR',
  'ρ = R * (1 + αΔT)',
  'n = c / v',
  'p = h / λ',
  'E = hf',
  'Q = mc',
  'Q = mL',
  'Q = CV',
  'Q = Q₀e^(-t/RC)',
  'Q = Qₑ(1 - e^(-t/RC))',
  'pVγ = constant',
  'V = kQ / r',
  'U = ½CV²',
  'p = mv',
  'KE = ½mv²',
  'v = fλ',
  'Δx * Δp ≥ ħ/2',
  'γ = 1 / √(1 - v²/c²)',
  'V = V₀e^(-t/τ)',
  'V = IR',
  'P = IV',
  'I = Q / Δt',
  'ρ = m / V',
  'W = Fd',
  'F = ma',
  'F = k * (q₁ * q₂) / r²',
  'Fg = G * (m₁ * m₂) / r²',
  'Fg = mg',
  'a = F / m',
  'Q = mcΔT',
  'Q = mL',
  'Q = ne',
  'Q = CV',
  'Q = Q₀e^(-t/RC)',
  'Q = Qₑ(1 - e^(-t/RC))',
  'n = N / Nₐ',
  'n = c / v',
  'n₁sinθ₁ = n₂sinθ₂',
  'ΔU = Q - W',
  'PV = nRT',
  'pV = NkT',
  'ρ = R * (1 + αΔT)',
  'v₂ - v₁ = gt',
  's = ut + ½gt²',
  'v² = u² + 2as',
  's = (u + v)t / 2',
  'ΦE = q / ε₀',
  'p = mv',
  'τ = Iα',
  'ω = 2πf',
  'E = hf',
  'p = h / λ',
  'λ = h / p',
  'E = Δmc²',
  'Δx * Δp ≥ ħ/2',
  'γ = 1 / √(1 - v²/c²)',
  'E = mc² / √(1 - v²/c²)',
  'E = hf',
  'F = k * (|q₁q₂|) / r²',
  'E = k * |q| / r²',
  'PE = k * (q₁q₂) / r',
  'n₁sinθ₁ = n₂sinθ₂',
  'E = E₀ + KE + PE',
  'λ = c / f',
  'E = mc²',
  'p = mv',
  'λ = h / p',
  'F = q(E + v × B)',
  'B = μ₀I / (2πr)',
  'F = ILBsinθ',
  'p = h / λ',
  'Q = mc',
  'Q = mL',
  'q = ne',
  'Δx * Δp ≥ ħ/2',
  'α = ΔL / L₀ΔT',
  'γ = 1 / √(1 - v²/c²)',
  'n = c / v',
  'v = fλ',
  'f\' = f(v + vo) / (v + vs)',
  'Q = Q₀e^(-t/RC)',
  'Q = Qₑ(1 - e^(-t/RC))',
  'f = 1 / T',
  'Q = mc',
  'Q = mL',
  'Q = CV',
  'Q = Q₀e^(-t/RC)',
  'Q = Qₑ(1 - e^(-t/RC))',
  'E = mc²',
  'Q = mL',
  'q = ne',
  'ε = -dΦ/dt',
  'V = kQ / r',
  'n₁sinθ₁ = n₂sinθ₂',
  'Q = mcΔT',
  'Fg = G * (m₁ * m₂) / r²',
  'Fg = mg',
  'W = Fd',
  'F = ma',
  'a = F / m',
  'p = mv',
  'p = FΔt',
  'F = k * (q₁ * q₂) / r²',
  'V = IR',
  'I = Q / Δt',
  'Q = ne',
  'Q = CV',
  'W = QV',
  'V = kQ / r',
  'C = ε₀A / d',
  'C = Q / V',
  'U = ½CV²',
  'Q = Q₀e^(-t/RC)',
  'Q = Qₑ(1 - e^(-t/RC))',
  'λ = c / f',
  'v = fλ',
  'f\' = f(v + vo) / (v + vs)',
  'n = c / v',
  'α = ΔL / L₀ΔT',
  'f = 1 / T',
  'ω = 2πf',
  'v = fλ',
  'p = h / λ',
  'F = -kx',
  'f = -kx',
  'a = -ω²x',
  'τ = Iα',
  'Fb = ρVg',
  'ρ = m / V',
  'P = F / A',
  'V = IR',
  'ρ = R * (1 + αΔT)',
  'n = c / v',
  'p = h / λ',
  'E = hf',
  'Q = mc',
  'Q = mL',
  'Q = CV',
  'Q = Q₀e^(-t/RC)',
  'Q = Qₑ(1 - e^(-t/RC))',
  'pVγ = constant',
  'V = kQ / r',
  'U = ½CV²',
  'p = mv',
  'KE = ½mv²',
  'v = fλ',
  'Δx * Δp ≥ ħ/2',
  'γ = 1 / √(1 - v²/c²)',
  'V = V₀e^(-t/τ)',
  'V = IR',
  'P = IV',
  'I = Q / Δt',
  'ρ = m / V',
  'W = Fd',
  'F = ma',
  'F = k * (q₁ * q₂) / r²',
  'Fg = G * (m₁ * m₂) / r²',
  'Fg = mg',
  'a = F / m',
  'Q = mcΔT',
  'Q = mL',
  'Q = ne',
  'Q = CV',
  'Q = Q₀e^(-t/RC)',
  'Q = Qₑ(1 - e^(-t/RC))',
  'n = N / Nₐ',
  'n = c / v',
  'n₁sinθ₁ = n₂sinθ₂',
  'ΔU = Q - W',
  'PV = nRT',
  'pV = NkT',
  'ρ = R * (1 + αΔT)',
  'v₂ - v₁ = gt',
  's = ut + ½gt²',
  'v² = u² + 2as',
  's = (u + v)t / 2',
  'ΦE = q / ε₀',
  'p = mv',
  'τ = Iα',
  'ω = 2πf',
  'E = hf',
  'p = h / λ',
  'λ = h / p',
  'E = Δmc²',
  'Δx * Δp ≥ ħ/2',
  'γ = 1 / √(1 - v²/c²)',
  'E = mc² / √(1 - v²/c²)',
  'E = hf',
  'F = k * (|q₁q₂|) / r²',
  'E = k * |q| / r²',
  'PE = k * (q₁q₂) / r',
  'n₁sinθ₁ = n₂sinθ₂',
  'E = E₀ + KE + PE',
  'λ = c / f',
  'E = mc²',
  'p = mv',
  'λ = h / p',
  'F = q(E + v × B)',
  'B = μ₀I / (2πr)',
  'F = ILBsinθ',
  'p = h / λ',
  'Q = mc',
  'Q = mL',
  'q = ne',
  'Δx * Δp ≥ ħ/2',
  'α = ΔL / L₀ΔT',
  'γ = 1 / √(1 - v²/c²)',
  'n = c / v',
  'v = fλ',
  'f\' = f(v + vo) / (v + vs)',
  'Q = Q₀e^(-t/RC)',
  'Q = Qₑ(1 - e^(-t/RC))',
  'f = 1 / T',
  'Q = mc',
  'Q = mL',
  'Q = CV',
  'Q = Q₀e^(-t/RC)',
  'Q = Qₑ(1 - e^(-t/RC))',
  'E = mc²',
  'Q = mL',
  'q = ne',
  'ε = -dΦ/dt',
  'V = kQ / r',
  'n₁sinθ₁ = n₂sinθ₂',
  'Q = mcΔT',
  'Fg = G * (m₁ * m₂) / r²',
  'Fg = mg',
  'W = Fd',
  'F = ma',
  'a = F / m',
  'p = mv',
  'p = FΔt',
  'F = k * (q₁ * q₂) / r²',
  'V = IR',
  'I = Q / Δt',
  'Q = ne',
  'Q = CV',
  'W = QV',
  'V = kQ / r',
  'C = ε₀A / d',
  'C = Q / V',
  'U = ½CV²',
  'Q = Q₀e^(-t/RC)',
  'Q = Qₑ(1 - e^(-t/RC))',
  'λ = c / f',
  'v = fλ',
  'f\' = f(v + vo) / (v + vs)',
  'n = c / v',
  'α = ΔL / L₀ΔT',
  'f = 1 / T',
  'ω = 2πf',
  'v = fλ',
  'p = h / λ',
  'F = -kx',
  'f = -kx',
  'a = -ω²x',
  'τ = Iα',
  'Fb = ρVg',
  'ρ = m / V',
  'P = F / A',
  'V = IR',
  'ρ = R * (1 + αΔT)',
  'n = c / v',
  'p = h / λ',
  'E = hf',
  'Q = mc',
  'Q = mL',
  'Q = CV',
  'Q = Q₀e^(-t/RC)',
  'Q = Qₑ(1 - e^(-t/RC))',
  'pVγ = constant',
  'V = kQ / r',
  'U = ½CV²',
  'p = mv',
  'KE = ½mv²',
  'v = fλ',
  'Δx * Δp ≥ ħ/2',
  'γ = 1 / √(1 - v²/c²)',
  'V = V₀e^(-t/τ)',
  'V = IR',
  'P = IV',
  'I = Q / Δt',
  'ρ = m / V',
  'W = Fd',
  'F = ma',
  'F = k * (q₁ * q₂) / r²',
  'Fg = G * (m₁ * m₂) / r²',
  'Fg = mg',
  'a = F / m',
  'Q = mcΔT',
  'Q = mL',
  'Q = ne',
  'Q = CV',
  'Q = Q₀e^(-t/RC)',
  'Q = Qₑ(1 - e^(-t/RC))',
  'n = N / Nₐ',
  'n = c / v',
  'n₁sinθ₁ = n₂sinθ₂',
  'ΔU = Q - W',
  'PV = nRT',
  'pV = NkT',
  'ρ = R * (1 + αΔT)',
  'v₂ - v₁ = gt',
  's = ut + ½gt²',
  'v² = u² + 2as',
  's = (u + v)t / 2',
  'ΦE = q / ε₀',
  'p = mv',
  'τ = Iα',
  'ω = 2πf',
  'E = hf',
  'p = h / λ',
  'λ = h / p',
  'E = Δmc²',
  'Δx * Δp ≥ ħ/2',
  'γ = 1 / √(1 - v²/c²)',
  'E = mc² / √(1 - v²/c²)',
  'E = hf',
  'F = k * (|q₁q₂|) / r²',
  'E = k * |q| / r²',
  'PE = k * (q₁q₂) / r',
  'n₁sinθ₁ = n₂sinθ₂',
  'E = E₀ + KE + PE',
  'λ = c / f',
  'E = mc²',
  'p = mv',
  'm = p / v',
  'λ = h / p',
  'F = q(E + v × B)',
  'B = μ₀I / (2πr)',
  'F = ILBsinθ',
  'p = h / λ',
  'Q = mc',
  'Q = mL',
  'q = ne',
  'Δx * Δp ≥ ħ/2',
  'α = ΔL / L₀ΔT',
  'γ = 1 / √(1 - v²/c²)',
  'n = c / v',
  'v = fλ',
  'f\' = f(v + vo) / (v + vs)',
  'Q = Q₀e^(-t/RC)',
  'Q = Qₑ(1 - e^(-t/RC))',
  'f = 1 / T',
  'T = 1 / f',
  'Q = mc',
  'm = Q / c',
  'Q = mL',
  'Q = CV',
  'Q = Q₀e^(-t/RC)',
  'Q = Qₑ(1 - e^(-t/RC))',
  'E = mc²',
  'Q = mL',
  'm = Q / L',
  'q = ne',
  'ε = -dΦ/dt',
  'V = kQ / r',
  'n₁sinθ₁ = n₂sinθ₂',
  'Q = mcΔT',
  'Fg = G * (m₁ * m₂) / r²',
  'Fg = mg',
  'W = Fd',
  'F = ma',
  'a = F / m',
  'p = mv',
  'p = FΔt',
  'F = k * (q₁ * q₂) / r²',
  'V = IR',
  'I = Q / Δt',
  'Q = ne',
  'Q = CV',
  'W = QV',
  'V = kQ / r',
  'C = ε₀A / d',
  'C = Q / V',
  'U = ½CV²',
  'Q = Q₀e^(-t/RC)',
  'Q = Qₑ(1 - e^(-t/RC))',
  'λ = c / f',
  'v = fλ',
  'f\' = f(v + vo) / (v + vs)',
  'n = c / v',
  'α = ΔL / L₀ΔT',
  'f = 1 / T',
  'ω = 2πf',
  'v = fλ',
  'p = h / λ',
  'F = -kx',
  'f = -kx',
  'a = -ω²x',
  'τ = Iα',
  'Fb = ρVg',
  'ρ = m / V',
  'P = F / A',
  'V = IR',
  'ρ = R * (1 + αΔT)',
  'n = c / v',
  'p = h / λ',
  'E = hf',
  'Q = mc',
  'Q = mL',
  'Q = CV',
  'Q = Q₀e^(-t/RC)',
  'Q = Qₑ(1 - e^(-t/RC))',
  'pVγ = constant',
  'V = kQ / r',
  'U = ½CV²',
  'p = mv',
  'KE = ½mv²',
  'v = fλ',
  'Δx * Δp ≥ ħ/2',
  'γ = 1 / √(1 - v²/c²)',
  'V = V₀e^(-t/τ)',
  'V = IR',
  'P = IV',
  'I = Q / Δt',
  'ρ = m / V',
  'W = Fd',
  'F = ma',
  'F = k * (q₁ * q₂) / r²',
  'Fg = G * (m₁ * m₂) / r²',
  'Fg = mg',
  'a = F / m',
  'Q = mcΔT',
  'Q = mL',
  'Q = ne',
  'Q = CV',
  'Q = Q₀e^(-t/RC)',
  'Q = Qₑ(1 - e^(-t/RC))',
  'n = N / Nₐ',
  'n = c / v',
  'n₁sinθ₁ = n₂sinθ₂',
  'ΔU = Q - W',
  'PV = nRT',
  'pV = NkT',
  'ρ = R * (1 + αΔT)',
  'v₂ - v₁ = gt',
  's = ut + ½gt²',
  'v² = u² + 2as',
  's = (u + v)t / 2',
  'ΦE = q / ε₀',
  'p = mv',
  'τ = Iα',
  'ω = 2πf',
  'E = hf',
  'p = h / λ',
  'λ = h / p',
  'E = Δmc²',
  'Δx * Δp ≥ ħ/2',
  'γ = 1 / √(1 - v²/c²)',
  'E = mc² / √(1 - v²/c²)',
  'E = hf',
  'F = k * (|q₁q₂|) / r²',
  'E = k * |q| / r²',
  'PE = k * (q₁q₂) / r',
  'n₁sinθ₁ = n₂sinθ₂',
  'E = E₀ + KE + PE',
  'λ = c / f',
  'E = mc²',
  'p = mv',
  'λ = h / p',
  'F = q(E + v × B)',
  'B = μ₀I / (2πr)',
  'F = ILBsinθ',
  'p = h / λ',
  'Q = mc',
  'Q = mL',
  'q = ne',
  'Δx * Δp ≥ ħ/2',
  'α = ΔL / L₀ΔT',
  'γ = 1 / √(1 - v²/c²)',
  'n = c / v',
  'v = fλ',
  'f\' = f(v + vo) / (v + vs)',
  'Q = Q₀e^(-t/RC)',
  'Q = Qₑ(1 - e^(-t/RC))',
  'f = 1 / T',
  'Q = mc',
  'Q = mL',
  'Q = CV',
  'Q = Q₀e^(-t/RC)',
  'Q = Qₑ(1 - e^(-t/RC))',
  'E = mc²',
  'Q = mL',
  'q = ne',
  'ε = -dΦ/dt',
  'V = kQ / r',
  'n₁sinθ₁ = n₂sinθ₂',
  'Q = mcΔT',
  'Fg = G * (m₁ * m₂) / r²',
  'Fg = mg',
  'W = Fd',
  'F = ma',
  'a = F / m',
  'p = mv',
  'p = FΔt',
  'F = k * (q₁ * q₂) / r²',
  'V = IR',
  'I = Q / Δt',
  'Q = ne',
  'Q = CV',
  'W = QV',
  'V = kQ / r',
  'C = ε₀A / d',
  'C = Q / V',
  'U = ½CV²',
  'Q = Q₀e^(-t/RC)',
  'Q = Qₑ(1 - e^(-t/RC))',
  'λ = c / f',
  'v = fλ',
  'f\' = f(v + vo) / (v + vs)',
  'n = c / v',
  'α = ΔL / L₀ΔT',
  'f = 1 / T',
  'ω = 2πf',
  'v = fλ',
  'p = h / λ',
  'F = -kx',
  'f = -kx',
  'a = -ω²x',
  'τ = Iα',
  'Fb = ρVg',
  'ρ = m / V',
  'P = F / A',
  'V = IR',
  'ρ = R * (1 + αΔT)',
  'n = c / v',
  'p = h / λ',
  'E = hf',
  'Q = mc',
  'Q = mL',
  'Q = CV',
  'Q = Q₀e^(-t/RC)',
  'Q = Qₑ(1 - e^(-t/RC))',
  'pVγ = constant',
  'V = kQ / r',
  'U = ½CV²',
  'p = mv',
  'KE = ½mv²',
  'v = fλ',
  'Δx * Δp ≥ ħ/2',
  'γ = 1 / √(1 - v²/c²)',
  'V = V₀e^(-t/τ)',
  'V = IR',
  'P = IV',
  'I = Q / Δt',
  'ρ = m / V',
  'W = Fd',
  'F = ma',
  'F = k * (q₁ * q₂) / r²',
  'Fg = G * (m₁ * m₂) / r²',
  'Fg = mg',
  'a = F / m',
  'Q = mcΔT',
  'Q = mL',
  'Q = ne',
  'Q = CV',
  'Q = Q₀e^(-t/RC)',
  'Q = Qₑ(1 - e^(-t/RC))',
  'n = N / Nₐ',
  'n = c / v',
  'n₁sinθ₁ = n₂sinθ₂',
  'ΔU = Q - W',
  'PV = nRT',
  'pV = NkT',
  'ρ = R * (1 + αΔT)',
  'v₂ - v₁ = gt',
  's = ut + ½gt²',
  'v² = u² + 2as',
  's = (u + v)t / 2',
  'ΦE = q / ε₀',
  'p = mv',
  'τ = Iα',
  'ω = 2πf',
  'E = hf',
  'p = h / λ',
  'λ = h / p',
  'E = Δmc²',
  'Δx * Δp ≥ ħ/2',
  'γ = 1 / √(1 - v²/c²)',
  'E = mc² / √(1 - v²/c²)',
  'E = hf',
  'F = k * (|q₁q₂|) / r²',
  'E = k * |q| / r²',
  'PE = k * (q₁q₂) / r',
  'n₁sinθ₁ = n₂sinθ₂',
  'E = E₀ + KE + PE',
  'λ = c / f',
  'E = mc²',
  'p = mv',
  'λ = h / p',
  'F = q(E + v × B)',
  'B = μ₀I / (2πr)',
  'F = ILBsinθ',
  'p = h / λ',
  'Q = mc',
  'Q = mL',
  'q = ne',
  'Δx * Δp ≥ ħ/2',
  'α = ΔL / L₀ΔT',
  'γ = 1 / √(1 - v²/c²)',
  'n = c / v',
  'v = fλ',
  'f\' = f(v + vo) / (v + vs)',
  'Q = Q₀e^(-t/RC)',
  'Q = Qₑ(1 - e^(-t/RC))',
  'f = 1 / T',
  'Q = mc',
  'Q = mL',
  'Q = CV',
  'Q = Q₀e^(-t/RC)',
  'Q = Qₑ(1 - e^(-t/RC))',
  'E = mc²',
  'Q = mL',
  'q = ne',
  'ε = -dΦ/dt',
  'V = kQ / r',
  'n₁sinθ₁ = n₂sinθ₂',
  'Q = mcΔT',
  'Fg = G * (m₁ * m₂) / r²',
  'Fg = mg',
  'W = Fd',
  'F = ma',
  'a = F / m',
  'p = mv',
  'p = FΔt',
  'F = k * (q₁ * q₂) / r²',
  'V = IR',
  'I = Q / Δt',
  'Q = ne',
  'Q = CV',
  'W = QV',
  'V = kQ / r',
  'C = ε₀A / d',
  'C = Q / V',
  'U = ½CV²',
  'Q = Q₀e^(-t/RC)',
  'Q = Qₑ(1 - e^(-t/RC))',
  'λ = c / f',
  'v = fλ',
  'f\' = f(v + vo) / (v + vs)',
  'n = c / v',
  'α = ΔL / L₀ΔT',
  'f = 1 / T',
  'ω = 2πf',
  'v = fλ',
  'p = h / λ',
  'F = -kx',
  'f = -kx',
  'a = -ω²x',
  'τ = Iα',
  'Fb = ρVg',
  'ρ = m / V',
  'P = F / A',
  'V = IR',
  'ρ = R * (1 + αΔT)',
  'n = c / v',
  'p = h / λ',
  'E = hf',
  'Q = mc',
  'Q = mL',
  'Q = CV',
  'Q = Q₀e^(-t/RC)',
  'Q = Qₑ(1 - e^(-t/RC))',
  'pVγ = constant',
  'V = kQ / r',
  'U = ½CV²',
  'p = mv',
  'KE = ½mv²',
  'v = fλ',
  'Δx * Δp ≥ ħ/2',
  'γ = 1 / √(1 - v²/c²)',
  'V = V₀e^(-t/τ)',
  'V = IR',
  'P = IV',
  'I = Q / Δt',
  'ρ = m / V',
  'W = Fd',
  'F = ma',
  'F = k * (q₁ * q₂) / r²',
  'Fg = G * (m₁ * m₂) / r²',
  'Fg = mg',
  'a = F / m',
  'Q = mcΔT',
  'Q = mL',
  'Q = ne',
  'Q = CV',
  'Q = Q₀e^(-t/RC)',
  'Q = Qₑ(1 - e^(-t/RC))',
  'n = N / Nₐ',
  'n = c / v',
  'n₁sinθ₁ = n₂sinθ₂',
  'ΔU = Q - W',
  'PV = nRT',
  'pV = NkT',
  'ρ = R * (1 + αΔT)',
  'v₂ - v₁ = gt',
  's = ut + ½gt²',
  'v² = u² + 2as',
  's = (u + v)t / 2',
  'ΦE = q / ε₀',
  'p = mv',
  'τ = Iα',
  'ω = 2πf',
  'E = hf',
  'p = h / λ',
  'λ = h / p',
  'E = Δmc²',
  'Δx * Δp ≥ ħ/2',
  'γ = 1 / √(1 - v²/c²)',
  'E = mc² / √(1 - v²/c²)',
  'E = hf',
  'F = k * (|q₁q₂|) / r²',
  'E = k * |q| / r²',
  'PE = k * (q₁q₂) / r',
  'n₁sinθ₁ = n₂sinθ₂',
  'E = E₀ + KE + PE',
  'λ = c / f',
  'E = mc²',
  'p = mv',
  'λ = h / p',
  'F = q(E + v × B)',
  'B = μ₀I / (2πr)',
  'F = ILBsinθ',
  'p = h / λ',
  'Q = mc',
  'Q = mL',
  'q = ne',
  'Δx * Δp ≥ ħ/2',
  'α = ΔL / L₀ΔT',
  'γ = 1 / √(1 - v²/c²)',
  'n = c / v',
  'v = fλ',
  'f\' = f(v + vo) / (v + vs)',
  'Q = Q₀e^(-t/RC)',
  'Q = Qₑ(1 - e^(-t/RC))',
  'f = 1 / T',
  'Q = mc',
  'Q = mL',
  'Q = CV',
  'Q = Q₀e^(-t/RC)',
  'Q = Qₑ(1 - e^(-t/RC))',
  'E = mc²',
  'Q = mL',
  'q = ne',
  'ε = -dΦ/dt',
  'V = kQ / r',
  'n₁sinθ₁ = n₂sinθ₂',
  'Q = mcΔT',
  'Fg = G * (m₁ * m₂) / r²',
  'Fg = mg',
  'W = Fd',
  'F = ma',
  'a = F / m',
  'p = mv',
  'p = FΔt',
  'F = k * (q₁ * q₂) / r²',
  'V = IR',
  'I = Q / Δt',
  'Q = ne',
  'Q = CV',
  'W = QV',
  'V = kQ / r',
  'C = ε₀A / d',
  'C = Q / V',
  'U = ½CV²',
  'Q = Q₀e^(-t/RC)',
  'Q = Qₑ(1 - e^(-t/RC))',
  'λ = c / f',
  'v = fλ',
  'f\' = f(v + vo) / (v + vs)',
  'n = c / v',
  'α = ΔL / L₀ΔT',
  'f = 1 / T',
  'ω = 2πf',
  'v = fλ',
  'p = h / λ',
  'F = -kx',
  'f = -kx',
  'a = -ω²x',
  'τ = Iα',
  'Fb = ρVg',
  'ρ = m / V',
  'P = F / A',
  'V = IR',
  'ρ = R * (1 + αΔT)',
  'n = c / v',
  'p = h / λ',
  'E = hf',
  'Q = mc',
  'Q = mL',
  'Q = CV',
  'Q = Q₀e^(-t/RC)',
  'Q = Qₑ(1 - e^(-t/RC))',
  'pVγ = constant',
  'V = kQ / r',
  'U = ½CV²',
  'p = mv',
  'KE = ½mv²',
  'v = fλ',
  'Δx * Δp ≥ ħ/2',
  'γ = 1 / √(1 - v²/c²)',
  'V = V₀e^(-t/τ)',
  'V = IR',
  'P = IV',
  'I = Q / Δt',
  'ρ = m / V',
  'W = Fd',
  'F = ma',
  'F = k * (q₁ * q₂) / r²',
  'Fg = G * (m₁ * m₂) / r²',
  'Fg = mg',
  'a = F / m',
  'Q = mcΔT',
  'Q = mL',
  'Q = ne',
  'Q = CV',
  'Q = Q₀e^(-t/RC)',
  'Q = Qₑ(1 - e^(-t/RC))',
  'n = N / Nₐ',
  'n = c / v',
  'n₁sinθ₁ = n₂sinθ₂',
  'ΔU = Q - W',
  'PV = nRT',
  'pV = NkT',
  'ρ = R * (1 + αΔT)',
  'v₂ - v₁ = gt',
  's = ut + ½gt²',
  'v² = u² + 2as',
  's = (u + v)t / 2',
  'ΦE = q / ε₀',
  'p = mv',
  'τ = Iα',
  'ω = 2πf',
  'E = hf',
  'p = h / λ',
  'λ = h / p',
  'E = Δmc²',
  'Δx * Δp ≥ ħ/2',
  'γ = 1 / √(1 - v²/c²)',
  'E = mc² / √(1 - v²/c²)',
  'E = hf',
  'F = k * (|q₁q₂|) / r²',
  'E = k * |q| / r²',
  'PE = k * (q₁q₂) / r',
  'n₁sinθ₁ = n₂sinθ₂',
  'E = E₀ + KE + PE',
  'λ = c / f',
  'E = mc²',
  'p = mv',
  'λ = h / p',
  'F = q(E + v × B)',
  'B = μ₀I / (2πr)',
  'F = ILBsinθ',
  'p = h / λ',
  'Q = mc',
  'Q = mL',
  'q = ne',
  'Δx * Δp ≥ ħ/2',
  'α = ΔL / L₀ΔT',
  'γ = 1 / √(1 - v²/c²)',
  'n = c / v',
  'v = fλ',
  'f\' = f(v + vo) / (v + vs)',
  'Q = Q₀e^(-t/RC)',
  'Q = Qₑ(1 - e^(-t/RC))',
  'f = 1 / T',
  'Q = mc',
  'Q = mL',
  'Q = CV',
  'Q = Q₀e^(-t/RC)',
  'Q = Qₑ(1 - e^(-t/RC))',
  'E = mc²',
  'Q = mL',
  'q = ne',
  'ε = -dΦ/dt',
  'V = kQ / r',
  'n₁sinθ₁ = n₂sinθ₂',
  'Q = mcΔT',
  'Fg = G * (m₁ * m₂) / r²',
  'Fg = mg',
  'W = Fd',
  'F = ma',
  'a = F / m',
  'p = mv',
  'p = FΔt',
  'F = k * (q₁ * q₂) / r²',
  'V = IR',
  'I = Q / Δt',
  'Q = ne',
  'Q = CV',
  'W = QV',
  'V = kQ / r',
  'C = ε₀A / d',
  'C = Q / V',
  'U = ½CV²',
  'Q = Q₀e^(-t/RC)',
  'Q = Qₑ(1 - e^(-t/RC))',
  'λ = c / f',
  'v = fλ',
  'f\' = f(v + vo) / (v + vs)',
  'n = c / v',
  'α = ΔL / L₀ΔT',
  'f = 1 / T',
  'ω = 2πf',
  'v = fλ',
  'p = h / λ',
  'F = -kx',
  'f = -kx',
  'a = -ω²x',
  'τ = Iα',
  'Fb = ρVg',
  'ρ = m / V',
  'P = F / A',
  'V = IR',
  'ρ = R * (1 + αΔT)',
  'n = c / v',
  'p = h / λ',
  'V = S / t',
  't = S / V',
  'S = v * t',
  'A = F * S'
 
];

const Answer = ({imported, unknown}) => {
  useEffect(() => {
    
    setData([])
    setAnsw([])

  }, [imported, unknown])
  
  const [data, setData] = useState([])
  const [answ, setAnsw] = useState([])

  const filteredImported = imported.map(el => el.element)
  const filteredUnknown = unknown.map(el => el.element)

  filteredUnknown.forEach(val => formulas.forEach(val2 => {
    if(val2.startsWith(val) && !data.includes(val2)){
      setData([...data, val2])
    }
  }))
  
  filteredImported.forEach(val => data.forEach(val2 => {
    if(val2.includes(val) && !answ.includes(val2)){
      setAnsw([...answ, val2])
    }
  }))

  if(unknown[0] != null){
    return (
      <div className='physics-answer'>
        {answ.map(el => {
          return (
            <div className='answer' key={answ.indexOf(el)}>
              <p>{el}</p>
            </div>
          )
        })}
        <div className='line'></div>
        {data.map(el => {
          return (
            <div className='answer' key={data.indexOf(el)}>
              <p>{el}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Answer